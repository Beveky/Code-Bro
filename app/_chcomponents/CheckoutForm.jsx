"use client";
import { useUser } from "@clerk/nextjs";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import OrdersApis from "../_utils/OrderApis";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState();
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (submitting) return; // If already submitting, do nothing
    setSubmitting(true); // Set submitting state to true

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    createOrder();
    sendEmail();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "https://code-bro-one.vercel.app/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder = () => {
    let productIds = [];
    cart.forEach((el) => {
      productIds.push(el?.product?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds,
      },
    };
    OrdersApis.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((el) => {
          CartApis.deleteCartItem(el?.id).then((result) => {});
        });
      }
    });
  };

  const sendEmail = async () => {
    const res = await fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
        email: user.primaryEmailAddress.emailAddress,
        fullName: user.fullName,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="p-2 text-white bg-hover rounded-md w-full mt-4">
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
