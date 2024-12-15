import React, { useRef, useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../Animations/animatio.json";
import {
  Package,
  Truck,
  ShieldCheck,
  Hourglass,
  Leaf,
  Repeat,
  Headphones,
  Tag,
  ChevronLeft,
  ChevronRight,
  Megaphone,
} from "lucide-react";
import { IoMdMegaphone } from "react-icons/io";

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
    description: "Hassle-free returns and exchanges with clear guidelines.",
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current && isMobile) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons);
      }
    };
  }, [isMobile]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
    <div className="bg-white dark:bg-zinc-900 shadow-lg px-6 py-8 rounded-xl hover:shadow-xl transition-shadow duration-300 dark:border dark:border-zinc-800 dark:hover:border-white h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rose-600 text-white mb-6">
          <feature.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {feature.name}
        </h3>
        <p className="text-base text-gray-500 dark:text-gray-400 flex-grow">
          {feature.description}
        </p>
      </div>
    </div>
  );

  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-rose-500 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose QuickRent?
          </p>
        </div>

        <div className="mt-20 relative">
          {isMobile ? (
            <>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:px-8">
                {showRightButton && (
                  <button
                    onClick={() => scroll("right")}
                    className="p-2 rounded-full ml-64 bg-white/90 dark:bg-zinc-800/90 shadow-lg pointer-events-auto hover:bg-white dark:hover:bg-zinc-700 transition-colors transform translate-x-2"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </button>
                )}
              </div>

              <div
                ref={scrollContainerRef}
                className="grid grid-flow-col auto-cols-[85%] md:auto-cols-[45%] gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="snap-start">
                    <FeatureCard feature={feature} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-4 gap-8">
              {features.map((feature) => (
                <FeatureCard key={feature.name} feature={feature} />
              ))}
            </div>
          )}
        </div>
        <div className="relative lg:flex lg:items-center lg:justify-center lg:gap-12">
          <div className="text-center mb-8 mt-14 lg:text-left lg:w-1/2">
            <div className="flex items-center space-x-2">
              <IoMdMegaphone className="hidden sm:block w-16 h-16 sm:w-32 sm:h-32 lg:w-44 lg:h-44 text-rose-600 dark:text-rose-500" />

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-rose-600 dark:text-rose-500 mb-4">
                Spacial Feature Coming Soon!
              </h3>
            </div>

            <h4 className="lg:text-3xl text-xl font-medium text-gray-700 dark:text-gray-200 mb-6">
              Delivery at Your Fingertips!
            </h4>

            <div className="w-16 h-1 bg-rose-600 dark:bg-rose-500 mx-auto lg:mx-0 mb-6"></div>

            <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-6">
              Get ready for an innovative way to experience lightning-fast
              delivery services over worldwide. We are introducing an
              extraordinary feature to bring convenience right to your doorstep!
            </p>

            <div className="flex flex-row flex-wrap items-center gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-rose-600 text-white rounded-lg shadow-lg hover:bg-rose-700 transition-all duration-300">
                Learn More
              </button>
              <button className="px-6 py-3 border border-rose-600 text-rose-600 dark:text-white dark:border-rose-600 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/50 transition-colors">
                Notify Me
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:w-1/2">
            <Lottie
              options={defaultOptions}
              height={isMobile ? 300 : 600}
              width={isMobile ? 300 : 600}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
