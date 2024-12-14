import React from "react";
import { Package, Clock, Truck, Shield, ShieldCheck, Hourglass, Leaf, Repeat1, Repeat, Headphones, Tag } from "lucide-react";

const features = [
  {
    name: "Wide Variety of Gadgets",
    description:
      "Explore our latest tech gadgets: laptops, cameras, gaming consoles, and much more.",
    icon: Package,
  },
  {
    name: "Quick Delivery",
    description:
      "Get your rented gadgets delivered to your doorstep within 24 hours of confirmation.",
    icon: Truck,
  },
  {
    name: "Flexible Duration",
    description:
      "Rent for a day, week, or month. Extend or return early based on your needs.",
    icon: Hourglass,
  },
  {
    name: "Damage Protection",
    description:
      "All rentals come with comprehensive damage protection for peace of mind.",
    icon: ShieldCheck,
  },
  {
    name: "Eco-Friendly Packaging",
    description:
      "Sustainable and recyclable packaging options to reduce environmental impact.",
    icon: Leaf,
  },
  {
    name: "Flexible Return Policy",
    description:
      "Hassle-free returns and exchanges with clear guidelines.",
    icon: Repeat,
  },
  {
    name: "24/7 Customer Support",
    description:
      "Always-available customer care via chat, email, or phone for quick issue resolution.",
    icon: Headphones,
  },
  {
    name: "Exclusive Deals and Discounts",
    description:
      "Regular sales, limited-time offers, and special deals for members.",
    icon: Tag,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-rose-500 dark:text-rose-500 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose QuickRent?
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white shadow-lg dark:bg-zinc-900 dark:bg-opacity-70 px-6 py-6 hover:shadow-lg rounded-xl dark:border border-zinc-700 dark:hover:border-white"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rose-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
