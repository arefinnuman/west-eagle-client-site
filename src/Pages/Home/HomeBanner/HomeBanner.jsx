import React from "react";

import { GiEagleEmblem } from "react-icons/gi";
const HomeBanner = () => {
  return (
    <section className="carousel w-full mb-10">
      <div id="slide1" className="carousel-item relative w-full h-5/6">
        <img
          src="https://images.unsplash.com/photo-1635710064268-69aa5d9355c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Real Madrid"
          className="w-full opacity-95"
        />
        <div>
          <h1 className="absolute invisible md:visible flex justify-center items-end left-5 right-5 bottom-0 text-6xl font-black text-center text-white tracking-widest p-5 uppercase shadow-2xl">
            WELCOME TO WEST
            <GiEagleEmblem />
            <span className="text-info"> EAGLE</span>
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-5/6">
        <img
          src="https://images.pexels.com/photos/9163132/pexels-photo-9163132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Manchester United"
          className="w-full opacity-90"
        />
        <div className="">
          <h1 className=" invisible md:visible	 absolute flex justify-center items-end left-5 right-5 bottom-0 text-6xl font-black text-center text-white tracking-widest p-5 uppercase shadow-2xl">
            WELCOME TO WEST
            <GiEagleEmblem />
            <span className="text-info"> EAGLE</span>
          </h1>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-5/6">
        <img
          src="https://images.unsplash.com/photo-1551854415-1df5f0d94b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Brazil"
          className="w-full opacity-90"
        />
        <div>
          <h1 className="invisible md:visible absolute flex justify-center items-end left-5 right-5 bottom-0 text-6xl font-black text-center text-white tracking-widest p-5 uppercase shadow-2xl">
            WELCOME TO WEST
            <GiEagleEmblem />
            <span className="text-info"> EAGLE</span>
          </h1>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-5/6">
        <img
          src="https://images.unsplash.com/photo-1551854304-9235bf86ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Germany"
          className="w-full opacity-95"
        />
        <div>
          <h1 className="invisible md:visible absolute flex justify-center items-end left-5 right-5 bottom-0 text-6xl font-black text-center text-white tracking-widest p-5 uppercase shadow-2xl">
            WELCOME TO WEST
            <GiEagleEmblem />
            <span className="text-info"> EAGLE</span>
          </h1>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
