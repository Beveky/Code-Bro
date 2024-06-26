import React from "react";
import Image from "next/image";

export default function ProductBanner({ product }) {
  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="product-details-banner"
          width={400}
          height={400}
          className="rounded-lg"
        />
      ) : (
        <div className=" bg-slate-200 rounded-lg animate-pulse w-[300px] h-[180px] sm:w-[400px] sm:h-[225px]"></div>
      )}
    </div>
  );
}
