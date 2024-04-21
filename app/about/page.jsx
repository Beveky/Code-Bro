"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function about() {
  const router = useRouter();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 select-none">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="aboutIMG"
              src="/about.png"
              className="absolute inset-0 h-full w-full object-cover select-none"
            />
          </div>

          <div className="lg:py-24 select-none">
            <h2 className="text-3xl font-bold sm:text-4xl ">
              About CO<span className="text-hover">D</span>E〰️BRO
            </h2>

            <p className="mt-4 text-gray-600">
              We want to help you build beautiful, accessible, fast, and secure
              websites that work cross-browser, and for all of your users. This
              site is our home for content to help you on that journey, written
              by CODE BRO team.
            </p>

            <a
              onClick={() => {
                router.push("/#assets", { scroll: true });
              }}
              className="mt-8 inline-block rounded bg-hover px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 select-none">
        <div className=" gap-8 lg:grid-cols-2 lg:gap-16 ">
          <h2 className="text-6xl font-bold sm:text-6xl ">
            What you can expect at CO<span className="text-hover">D</span>E〰️BRO
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>
        </div>
        <div className="gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-lg font-semibold sm:text-4xl text-hover ">
            A full roadmap to becoming a developer
          </h2>
          <p className="mt-4 text-gray-600">
            Our free, comprehensive curriculum will equip you to be a full stack
            developer, no matter your current experience level.
          </p>
        </div>
        <div className="gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-lg font-semibold sm:text-4xl text-hover  ">
            Learn by doing
          </h2>
          <p className="mt-4 text-gray-600">
            The most effective learning happens while building projects, so we
            have strategically placed them throughout our curriculum. These
            projects will make a strong portfolio for you to showcase on your
            resume.
          </p>
        </div>
        <div className="gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-lg font-semibold sm:text-4xl text-hover ">
            Receive support from others
          </h2>
          <p className="mt-4 text-gray-600">
            The maintainers of the curriculum run a Discord community, with the
            help of countless other volunteers, where you can receive help with
            anything in our curriculum.
          </p>
        </div>{" "}
        <div className="gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-lg font-semibold sm:text-4xl text-hover ">
            Open source and community driven
          </h2>
          <p className="mt-4 text-gray-600">
            You can deepen your understanding and improve your GitHub skills by
            contributing to our open source curriculum and helping others in our
            Discord community.
          </p>
        </div>
      </div>
      <div>
        <h2 className="flex justify-center items-center text-2xl font-bold mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 select-none">
          Overview of CO<span className="text-hover">D</span>E〰️BRO
        </h2>
      </div>
      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3 lg:gap-8 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex justify-center items-center h-32 shadow-xl rounded-lg bg-hover">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl text-white font-bold">1,286,105</h2>
            <h2 className="text-lg text-white font-light">Learners</h2>
          </div>
        </div>

        <div className="flex justify-center items-center h-40  shadow-xl rounded-lg bg-primary select-none">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl text-white font-bold">5000+</h2>
            <h2 className="text-lg text-white font-light">Contributors</h2>
          </div>
        </div>
        <div className="flex justify-center items-center h-32 shadow-xl rounded-lg bg-hover select-none">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl text-white font-bold">2024</h2>
            <h2 className="text-lg text-white font-light">Founded</h2>
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 p-4 select-none">
        <div className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
          <p className="text-center text-sm font-medium">
            Next.js Course 2024{" "}
            <button
              onClick={() => {
                router.push("/product-details/1");
              }}
              className="inline-block underline"
            >
              {" "}
              Check out this new course!{" "}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
