import React, { Suspense } from "react";
import Checkoutt from "../_chcomponents/Checkoutt";

export default function checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkoutt />
      {/* DemoCart-Test */}
      <div className="flex flex-col gap-5 mx-auto max-w-screen-xl px-4 py-16  lg:flex lg:h-full">
        <h2 className="text-hover font-bold text-3xl">Demo Cart For Test :</h2>
        <h2 className="text-hover font-medium text-xl">
          <span className="text-black">Cart Number :</span> 4242 4242 4242 4242
        </h2>
        <h2 className="text-hover font-medium text-xl">
          <span className="text-black">Expiration Date :</span> 12/45
        </h2>
        <h2 className="text-hover font-medium text-xl">
          <span className="text-black">CVC :</span> 335
        </h2>
      </div>
    </Suspense>
  );
}
