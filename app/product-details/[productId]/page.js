"use client";

import ProductApis from "../../_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";
import BreadCrumb from "../../_components/BreadCrumb";

export default function ProductDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    return () => {
      getProductById_();
    };
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log("product item", res.data.data);
      setProductDetails(res.data.data);
      getProductByCategory(res.data.data);
    });
  };

  const getProductByCategory = (product) => {
    ProductApis.getProductByCategory(product?.attributes?.category).then(
      (res) => {
        console.log(res?.data?.data);
        setProductList(res?.data?.data);
      }
    );
  };

  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-10 justify-around mt-10 sm:grid-cols-2 sm:gap-5 ">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <h2 className="mt-24 text-xl font-extrabold mb-4">Similar Products</h2>
      <ProductList productList={productList} />
    </div>
  );
}
