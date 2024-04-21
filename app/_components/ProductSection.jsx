"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

export default function ProductSection() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
    return () => {};
  }, []);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      console.log("myproduct", res.data.data);
      setProductList(res.data.data);
    });
  };

  return (
    <div id="assets" className="px-10 md:px-20 select-none">
      <h2 className="my-4 text-2xl font-extrabold ">Our Latest Products</h2>
      <ProductList productList={productList} />
    </div>
  );
}
