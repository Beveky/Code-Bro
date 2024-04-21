import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
      {productList.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
}
