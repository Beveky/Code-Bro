import React, { Suspense } from "react";
import Checkoutt from "../_chcomponents/Checkoutt";

export default function checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkoutt />
    </Suspense>
  );
}
