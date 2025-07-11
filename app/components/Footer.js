"use client";
import React from "react";
import { sendMessage } from "@/actions/sendmail";

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <h2 className="gradient-text text-6xl font-bold text-center max-[915px]:text-4xl">
        Contact
      </h2>
      <div className="grid grid-cols-2 w-[80%] m-auto py-10 gap-x-2 max-[915px]:gap-y-7 max-[915px]:grid-cols-1">
        <div className="flex flex-col justify-start items-start gap-4 max-[915px]:text-sm">
          <h3 className="text-[#0de6e6] text-2xl font-semibold max-[915px]:text-xl">
            Drop me a message
          </h3>
          <p>
            A web for visualising my work, my experiences, about me in detail.
          </p>
          <div>
            <i className="gradient-text pr-2 fa-solid fa-square-phone-flip"></i>
            <span>+92-3157378892</span>
          </div>
          <div>
            <i className="gradient-text pr-2 fa-solid fa-envelope"></i>
            <span>moizurrehman01@gmail.com</span>
          </div>
          <div>
            <i className="gradient-text pr-2 fa-solid fa-location-dot"></i>
            <span>Malikpur khalid bin waleed colony</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-4">
          <form
            className="mb-6 w-[70%] max-[915px]:w-full"
            action={sendMessage}
            method="POST"
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@resend.dev"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="divider h-[1px] w-[80%] m-auto bg-gray-300 mb-3"></div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Moiz Rehman. All rights reserved.
        </p>
        <p className="text-xs mt-2">Built with Next.js and React</p>
      </div>
    </footer>
  );
};

export default Footer;
