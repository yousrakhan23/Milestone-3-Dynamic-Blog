import React from "react";
import { Rubik_Vinyl } from "next/font/google";

const rubikVinyl = Rubik_Vinyl({
  weight: "400",
  subsets: ["latin"],
});

const ContactForm = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#181A2A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white dark:bg-[#1E2135] rounded-lg shadow-md p-8">
        <h2 className={`${rubikVinyl.className} text-3xl font-semibold  text-[#F2AE66] text-center mb-6`}>
          Get  in Touch
        </h2>
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E2135] dark:text-white"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E2135] dark:text-white"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E2135] dark:text-white"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#F2AE66] hover:bg-gradient-to-r hover:from-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
