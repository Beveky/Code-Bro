import React from "react";

export default function SkeletonProductInfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[20px] w-[300px] bg-slate-200 animate-pulse"></div>
      <div className="h-[80px] w-[800px] bg-slate-200 animate-pulse"></div>

      <div className="h-[20px] w-[250px] bg-slate-200 animate-pulse"></div>
      <div className="h-[80px] w-[350px] bg-slate-200 animate-pulse"></div>
    </div>
  );
}
