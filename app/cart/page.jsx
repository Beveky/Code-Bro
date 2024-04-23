"use client";
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { List } from "lucide-react";
import CartApis from "../_utils/CartApis";
import { useRouter } from "next/navigation";

export default function cart() {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const deleteCartItem = (id) => {
    CartApis.deleteCartItem(id)
      .then((res) => {
        if (res)
          setCart((oldCart) =>
            oldCart.filter((item) => item.id !== res?.data?.data?.id)
          );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;

    cart.forEach((item) => {
      totalAmount = totalAmount + Number(item?.product?.attributes?.price);
    });
    return totalAmount;
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="mx-auto max-w-3xl select-none">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8 flex flex-col gap-6">
            {cart?.map((item) => (
              <ul key={item.id} className="space-y-4">
                <li className="flex items-center gap-4">
                  <img
                    src={
                      item?.product?.attributes.banner?.data?.attributes?.url
                    }
                    alt="Product-Image"
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">
                      {item?.product?.attributes?.title}
                    </h3>

                    <div className="flex gap-2">
                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <dt className="inline">
                          <List className="w-4 h-4" />
                        </dt>
                        <dd className="inline">
                          {item?.product?.attributes?.category}
                        </dd>
                      </dl>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <h1> {`$${item?.product?.attributes?.price}`}</h1>

                    <button
                      onClick={() => deleteCartItem(item?.id)}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            ))}
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${getTotalAmount()}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      getTotalAmount() > 0
                        ? router.push(`/checkout?amount=${getTotalAmount()}`)
                        : null
                    }
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-[40px] flex items-center justify-center rounded-2xl ">
              <h2 className=" font-bold ">
                <span className="font-extrabold">Note: </span>All items will be
                sent via Email
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
