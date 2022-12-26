import React from "react";
import { Link } from "react-router-dom";

const HomeArticle = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="https://images.unsplash.com/photo-1614453966169-fd72db98e20f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
          className="w-full"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl dark:bg-base-100 border shadow-2xl   text-center">
          <div className="space-y-2">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold  sm:text-3xl uppercase"
            >
              It's not about the name on the back of the jersey. Its about the
              badge on the front.
            </Link>
            <p className="text-xs italic">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                David Beckham
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;
