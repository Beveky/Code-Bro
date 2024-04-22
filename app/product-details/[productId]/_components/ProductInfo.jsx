"use client";

import React, { useContext } from "react";
import { ShoppingCart, BadgeCheck, OctagonAlert } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../../_utils/CartApis";
import { CartContext } from "../../../_context/CartContext";

export default function ProductInfo({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const { user } = useUser();
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };

      CartApis.addToCart(data)
        .then((res) => {
          console.log("cart created succefully");
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((error) => {
          console.log("error"), error;
        });
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-[20px] font-extrabold">
          {product?.attributes?.title}
        </h2>
        <h2 className="text-[15px] text-gray-400 font-medium">
          {product?.attributes?.category}
        </h2>
        <h2 className="text-[15px] font-medium mt-5">
          {product?.attributes?.description[0]?.children[0]?.text}
        </h2>
        <h2 className="text-gray-500 text-[13px] font-semibold flex gap-2 mt-2 items-center">
          {product?.attributes?.instantDelivery ? (
            <BadgeCheck className="w-5 h-5 text-green-500" />
          ) : (
            <OctagonAlert className="w-5 h-5 text-red-500" />
          )}
          Eligible For Instant Delivery
        </h2>
        <div className="flex gap-10  items-center mt-5 ">
          <h2 className="text-[32px] text-hover font-bold ">
            ${product?.attributes?.price}
          </h2>
          <button
            onClick={() => handleAddToCart()}
            className="flex gap-3 rounded-md items-center justify-center bg-primary px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary/80 "
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
