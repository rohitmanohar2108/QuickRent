import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ui/ThemeToggle';
import AuthModal from './auth/AuthModal';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-white dark:bg-black shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Laptop className="h-8 w-8 text-red-600 dark:text-red-600" />
                <span className="ml-2 text-xl font-bold text-rose-500 dark:text-rose-500">QuickRent</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-rose-600 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600">
                Features
              </Link>
              <Link to="/" className="text-rose-600 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600">
                Gadgets
              </Link>
              {user && (
                <Link to="/my-gadgets" className="text-rose-600 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600">
                  My Gadgets
                </Link>
              )}
              <Link to="/contact" className="text-rose-600 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600">
                Contact
              </Link>
              <ThemeToggle />
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-300">{user.name}</span>
                  <button
                    onClick={signOut}
                    className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-600/90 border-b border-rose-400 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-rose-600/90 border-b border-rose-400 transition-colors"
                >
                  Sign Up
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
              <Link
                to="/"
                className="block px-3 py-2 text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600"
              >
                Features
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600"
              >
                Gadgets
              </Link>
              {user && (
                <Link
                  to="/my-gadgets"
                  className="block px-3 py-2 text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600"
                >
                  My Gadgets
                </Link>
              )}
              <Link
                to="/"
                className="block px-3 py-2 text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600"
              >
                Contact
              </Link>
              {user ? (
                <>
                  <span className="block px-3 py-2 text-gray-600 dark:text-gray-300">{user.name}</span>
                  <button
                    onClick={signOut}
                    className="w-full text-left px-3 py-2 text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="w-full text-left px-3 py-2 text-rose-500 dark:text-rose-500 hover:text-rose-600 dark:hover:text-rose-600"
                >
                  Sign Up
                </button>
              )}
            </div>
          </motion.div>
        )}
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}