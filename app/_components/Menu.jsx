"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Menu({ handleOpenMenu }) {
  const router = useRouter();
  const handleAbout = async () => {
    await Promise.all([router.push("/about"), handleOpenMenu()]);
  };
  const handleproduct = async () => {
    await Promise.all([
      router.push("/#assets", { scroll: true }),
      handleOpenMenu(),
    ]);
  };
  return (
    <div
      className="flex flex-col gap-10 h-[350px] w-[300px]  bg-[#ffffff] z-10 
                  rounded-2xl  shadow-2xl absolute mx-4  mt-1 right-0 top-12 p-5 overflow-auto select-none"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-7">
          <li>
            <a
              onClick={handleAbout}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
              About
            </a>
          </li>

          <li>
            <a
              onClick={handleOpenMenu}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
              Careers
            </a>
          </li>

          <li>
            <a
              onClick={handleOpenMenu}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
              History
            </a>
          </li>

          <li>
            <a
              onClick={handleOpenMenu}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
              Services
            </a>
          </li>

          <li>
            <a
              onClick={handleproduct}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
              Products
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
