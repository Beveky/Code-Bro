"use client";
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { List } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Cart({ handleOpenCart }) {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const getTotalAmount = () => {
    let totalAmount = 0;

    cart.forEach((item) => {
      totalAmount = totalAmount + Number(item?.product?.attributes?.price);
    });
    return totalAmount;
  };
  const handleCheckout = async () => {
    await Promise.all([
      router.push(`/checkout?amount=${getTotalAmount()}`),
      handleOpenCart(),
    ]);
  };
  return (
    <div
      className="flex flex-col gap-10 h-[350px] w-[300px]  bg-[#ffffff] z-10 
  rounded-2xl  shadow-2xl absolute mx-10  mt-1 right-10 top-12 p-5 overflow-auto 2xl:mx-96 select-none"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item) => (
            <li Key={item.id} className="flex items-center gap-4">
              <img
                src={item?.product?.attributes.banner?.data?.attributes?.url}
                alt=""
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">
                  {item?.product?.attributes?.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div className="flex gap-2">
                    <dt className="inline">
                      <List className="w-4 h-4" />
                    </dt>
                    <dd className="inline">
                      {item?.product?.attributes?.category}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">
                      {`${item?.product?.attributes?.price}$`}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 text-center">
        <Link
          onClick={handleOpenCart}
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/cart"
        >
          View my cart ({cart.length})
        </Link>
        <a
          onClick={getTotalAmount() > 0 ? handleCheckout : handleOpenCart}
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Checkout
        </a>

        <a
          onClick={handleOpenCart}
          href="#"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  );
}
