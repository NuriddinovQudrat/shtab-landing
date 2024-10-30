import Image from "next/image";
import React from "react";
import { Navbar } from "./navbar";

export const Hero = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="bg-black/50 w-full h-screen z-10 absolute top-0 left-auto right-auto">
        <Navbar />
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image src="https://dummyimage.com/720x600" alt="" width={720} height={600} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Knausgaard typewriter readymade marfa
              </h1>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, similique voluptatem
                doloremque dolorum ullam ad distinctio dolor corporis illo aut! Iure harum quia
                maxime fuga quo odio laboriosam ullam placeat nostrum voluptatibus nesciunt cum
                repudiandae tempore unde magni, praesentium, pariatur commodi deleniti cupiditate
                officia? Deserunt sapiente eum iste asperiores expedita.
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                  <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                Neutra shabby chic ramps, viral fixie.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
