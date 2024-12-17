import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 px-20 bg-neutral-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Touch
          </span>
        </h2>
        <p className="text-lg text-neutral-400">
          Have questions? Reach out to us, and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Email */}
        <div className="text-center bg-neutral-800 p-6 rounded-xl shadow-lg">
          <FaEnvelope className="text-4xl text-orange-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Email Us</h4>
          <p className="text-neutral-400">contact@cyberstream.com</p>
        </div>

        {/* Phone */}
        <div className="text-center bg-neutral-800 p-6 rounded-xl shadow-lg">
          <FaPhoneAlt className="text-4xl text-orange-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Call Us</h4>
          <p className="text-neutral-400">+1 (234) 567-890</p>
        </div>

        {/* Address */}
        <div className="text-center bg-neutral-800 p-6 rounded-xl shadow-lg">
          <FaMapMarkerAlt className="text-4xl text-orange-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
          <p className="text-neutral-400">
            123 Cyberstream Avenue, Tech City, CA 12345
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Send Us A Message
        </h3>
        <form className="bg-neutral-800 p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label className="block text-lg mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-orange-500 text-lg font-semibold text-gray-900 rounded-full hover:bg-orange-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
