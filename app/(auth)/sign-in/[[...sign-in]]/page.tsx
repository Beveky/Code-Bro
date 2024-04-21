'use client'

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Page() {

  const imageUrls = [
    '/LoginPic.png',
    '/LoginPic2.png',
    '/LoginPic3.png',
  ];
  const getRandomIndex = () => Math.floor(Math.random() * imageUrls.length);
  const [currentIndex, setCurrentIndex] = useState(getRandomIndex());

  useEffect(() => {
    
    setCurrentIndex(getRandomIndex());
  }, []);


  return (
    <section className="custom-gradient">
      
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      
        <img
            alt="LoginPic"
            src={imageUrls[currentIndex]}
          
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image
                src="/logo2.png"
                alt="Logo"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
                className="shadow-xl"
              />
            </a>
            <div className="flex gap-5">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to CO<span className="text-hover">D</span>E-BRO
              </h2>
              
            </div>

            <p className="mt-4 leading-relaxed text-white/90">
            Don't waste any more precious time being apart from code-bro. With time being of the essence, it's imperative that we act promptly. So, twirl your mustache in readiness, and let's get started!
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image
                src="/log.png"
                alt="Logo"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
                className="shadow-xl"
              />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to CO<span className="text-hover">D</span>E-BRO
              </h1>

              <p className="mt-4 leading-relaxed text-black-500 text-white">
              Don't waste any more precious time being apart from code-bro. With time being of the essence, it's imperative that we act promptly. So, twirl your mustache in readiness, and let's get started!
              </p>
              <p className="opacity-0">opacity0</p>
            </div>

            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-gradient-to-r from-indigo-700 to-purple-600",
                },
              }}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
