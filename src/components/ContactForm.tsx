import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div id="contact" className="bg-gray-50 dark:bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 ">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 block p-2 w-full rounded-md border-gray-300 dark:bg-black border dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 block p-2 w-full rounded-md border-gray-300 dark:bg-black border dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:bg-black border dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-600/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <a
                href="mailto:contact@quickrent.com"
                className="flex items-start p-2 rounded"
              >
                <Mail className="flex-shrink-0 h-6 w-6 text-rose-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    contact@quickrent.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-start  p-2 rounded"
              >
                <Phone className="flex-shrink-0 h-6 w-6 text-rose-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    +91 1234567890
                  </p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/NIT+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start  p-2 rounded"
              >
                <MapPin className="flex-shrink-0 h-6 w-6 text-rose-600" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    123 Tech Street Park
                    <br />
                    Bangalore, Ka, India 
                    530068
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
