import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Laptop, Laptop2, LaptopIcon, Monitor, User } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import AuthModal from "./auth/AuthModal";
import { useAuth } from "../context/AuthContext";
import Tooltip from "./ui/Tooltip";

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="bg-white dark:bg-black shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Laptop className="h-8 w-8 text-red-600 dark:text-red-600" />
                <span className="ml-2 text-xl font-bold text-rose-500 dark:text-rose-500">
                  QuickRent
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleScroll("features")}
                className="text-rose-600 hover:text-rose-600 dark:text-rose-500"
              >
                Features
              </button>
              <button
                onClick={() => handleScroll("gadgets")}
                className="text-rose-600 hover:text-rose-600 dark:text-rose-500"
              >
                Gadgets
              </button>
              {user && (
                <Link
                  to="/my-gadgets"
                  className="text-rose-600 hover:text-rose-600 dark:text-rose-500"
                >
                  My Gadgets
                </Link>
              )}
              <button
                onClick={() => handleScroll("contact")}
                className="text-rose-600 hover:text-rose-600 dark:text-rose-500"
              >
                Contact
              </button>
              <ThemeToggle />
              {user ? (
                <div className="flex items-center space-x-3">
                  <User
                    className="text-gray-800 dark:text-white"
                    aria-label="User Profile"
                  />
                  <span className="text-gray-600 dark:text-gray-300">
                    {user?.name}
                  </span>
                  <button
                    onClick={signOut}
                    className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-600/90 transition-colors border-b border-rose-400"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-rose-600/90 transition-colors  border-b border-rose-400"
                >
                  Sign Up
                </button>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              {user ? (
                <div className="flex items-center space-x-2">
                  <Tooltip text={user?.name}>
                    <div className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                      <User
                        className="h-5 w-5 text-gray-800 dark:text-white"
                        aria-label="User Profile"
                      />
                    </div>
                  </Tooltip>
                  <button
                    onClick={signOut}
                    className="bg-rose-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-rose-600/90 transition-colors border-b border-rose-400"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-rose-700 text-white text-sm px-3 py-1.5 rounded-md hover:bg-rose-600/90 transition-colors border-b border-rose-400"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
