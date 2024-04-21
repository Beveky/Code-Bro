import Image from "next/image";
import React from "react";
import { List } from "lucide-react";
import Link from "next/link";
export default function ProductItem({ product }) {
  return (
    <Link
      href={`/product-details/${product?.id}`}
      className="p-1 w-auto max-w-[320px] shadow-md rounded-lg 
    hover:border hover:cursor-pointer hover:scale-95 transition ease-out duration-500 select-none "
    >
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="banner-card"
        width={320}
        height={350}
        style={{ width: "320px" }}
        className="rounded-t-lg h-[170px]  object-cover"
      />
      <div className="p-3  rounded-b-lg bg-gray-50 ">
        <div>
          <h2 className="font-bold line-clamp-1">
            {product?.attributes?.title}
          </h2>
        </div>
        <div className="flex justify-between items-center ">
          <h2 className="text-gray-400 font-light text-[12px] flex gap-1 items-center">
            <List className="w-4 h-4" />
            {product?.attributes?.category}
          </h2>

          <div>
            <h2 className="text-gray-700 font-medium text-[13px]">
              $ {product?.attributes?.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
