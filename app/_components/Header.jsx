"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";
import Menu from "./Menu";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [openCart, setOpenCart] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };
  const { user } = useUser();
  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    return () => {
      setIsLoggedIn(
        window.location.href.toString().includes("sign-in") ||
          window.location.href.toString().includes("sign-up")
      );
    };
  }, []);
  useEffect(() => {
    user && getCartItems();
  }, [user]);
  return (
    !isLoggedIn && (
      <header className="bg-white shadow-md select-none">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a href="/">
                <Image
                  src="/log.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <button
                      onClick={() => {
                        router.push("/about");
                      }}
                      className="  text-gray-500 transition hover:text-gray-500/75"
                    >
                      {" "}
                      About{" "}
                    </button>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        router.push("/#assets", { scroll: true });
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      {" "}
                      Products{" "}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-hover px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-hover/80 "
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary/80 "
                      href="/sign-up"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5 ">
                  <h2
                    onClick={handleOpenCart}
                    className="flex gap-1 cursor-pointer"
                  >
                    <ShoppingBag /> ({cart?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {openCart && <Cart handleOpenCart={handleOpenCart} />}
                </div>
              )}

              {/* /////////Mobile DropDown Bars/////////// */}

              <div className="block md:hidden">
                <button
                  onClick={handleOpenMenu}
                  className="rounded bg-primary p-2 text-white transition hover:bg-primary/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {openMenu && <Menu handleOpenMenu={handleOpenMenu} />}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
}
