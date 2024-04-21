"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="bg-gray-50 ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center select-none">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-7xl font-extrabold sm:text-7xl ">
            All Your Digital Products.
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Is One Click Away.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Exploring State Of The Art Assets Now!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#assets"
            >
              Get Started
            </a>

            <a
              onClick={() => {
                router.push("/about");
              }}
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
