"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams } from "next/navigation";

export default function Checkoutt() {
  const searchParams = useSearchParams();
  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get("amount")) * 100,
  };
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY
  );
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get("amount"))} />
    </Elements>
  );
}
