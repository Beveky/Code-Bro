import React from "react";

export default function Popup({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="alert"
    >
      <div className="rounded-2xl p-8 bg-white sm:p-6 lg:p-8 flex flex-col z-20 shadow-2xl overflow-auto select-none justify-center items-center">
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <p className="font-medium sm:text-lg">Alert !!</p>
        </div>
        <p className="mt-2 text-gray-500">
          Thank you for visiting my website. Please note that it is currently
          deployed on Render's free tier,
        </p>
        <p className="mt-2 text-gray-500">
          which may result in a loading time of approximately 50 seconds to
          display all products.
        </p>
        <p className="mt-2 text-gray-500">
          Your patience is greatly appreciated as the content loads.
        </p>
        <div className="mt-6 sm:flex sm:gap-4">
          <a
            onClick={onClose}
            className="inline-block w-full rounded-lg bg-hover px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto cursor-pointer"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
}
