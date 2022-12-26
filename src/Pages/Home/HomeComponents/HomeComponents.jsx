import React from "react";
import { SiAdidas, SiNike } from "react-icons/si";
import HomeBanner from "../HomeBanner/HomeBanner";

const HomeComponents = () => {
  return (
    <section>
      <div className="bg-base-200">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl xl:max-w-2xl dark:text-gray-900">
            STORIES, STYLE, AND SPORTING GOODS AT WEST EAGLE, SINCE 2020
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us. They help us to get up and get moving. And sporting goods
            featuring the latest technologies help us beat our personal best.{" "}
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 flex justify-center items-center text-sm rounded-lg btn btn-primary"
            >
              <SiAdidas /> <span className="text-white ml-2">Adidas</span>
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 flex justify-center items-center text-sm  rounded-lg btn btn-outline btn-secondary"
            >
              <SiNike />
              <span className="text-black ml-2">Nike</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500">
        <HomeBanner />
      </div>
    </section>
  );
};

export default HomeComponents;
