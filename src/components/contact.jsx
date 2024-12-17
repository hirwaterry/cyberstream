import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-neutral-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide mb-3 sm:mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Touch
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-400">
          Have questions? Reach out to us, and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {/* Email */}
        <div className="text-center bg-neutral-800 p-4 sm:p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <FaEnvelope className="text-3xl sm:text-4xl text-orange-500 mx-auto mb-3 sm:mb-4" />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h4>
          <p className="text-sm sm:text-base text-neutral-400 break-words">
            infocyberstream.rw@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="text-center bg-neutral-800 p-4 sm:p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <FaPhoneAlt className="text-3xl sm:text-4xl text-orange-500 mx-auto mb-3 sm:mb-4" />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h4>
          <p className="text-sm sm:text-base text-neutral-400">+250 789 896 004</p>
        </div>

        {/* Address */}
        <div className="text-center bg-neutral-800 p-4 sm:p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <FaMapMarkerAlt className="text-3xl sm:text-4xl text-orange-500 mx-auto mb-3 sm:mb-4" />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Visit Us</h4>
          <p className="text-sm sm:text-base text-neutral-400">
            Norrsken House Kigali, 1 KN 78 St, Kigali
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
          Send Us A Message
        </h3>
        <form className="bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="mb-4 sm:mb-6">
            <label className="block text-base sm:text-lg mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 sm:p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-base sm:text-lg mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 sm:p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-base sm:text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full p-2 sm:p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-orange-500 text-base sm:text-lg font-semibold text-gray-900 rounded-full hover:bg-orange-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
