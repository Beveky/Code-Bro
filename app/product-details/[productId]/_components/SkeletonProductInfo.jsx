import React from "react";

export default function SkeletonProductInfo() {
  return (
    <div className="gap-2 flex flex-col justify-center sm:gap-2 sm:flex-col">
      <div className="h-10 sm:h-20 w-4/4 sm:w-full bg-slate-200 animate-pulse mb-5 "></div>
      <div className="h-48 sm:h-48 w-4/4 sm:w-full bg-slate-200 animate-pulse"></div>
    </div>
  );
}
