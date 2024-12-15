import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Rocket } from 'lucide-react';
import Modal from '../ui/Modal';
import { useAuth } from '../../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        await signIn(email, password);
      } else {
        await signUp(email, name, password);
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex flex-col items-center mb-6"
      >
        <div className="bg-rose-100 p-3 rounded-full mb-3">
          <Laptop className="w-8 h-8 text-rose-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">QuickRent</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {isSignIn ? 'Welcome back!' : 'Create your account'}
        </p>
      </motion.div>
      
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {!isSignIn && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2.5 rounded-lg border border-gray-300 shadow-sm 
                focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 
                dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                transition-all duration-200"
              required
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2.5 rounded-lg border border-gray-300 shadow-sm 
              focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white 
              transition-all duration-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2.5 rounded-lg border border-gray-300 shadow-sm 
              focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white 
              transition-all duration-200"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-rose-600 text-white px-4 py-2.5 rounded-lg font-medium
            hover:bg-rose-700 active:bg-rose-800 
            transition-colors duration-200 
            shadow-lg shadow-rose-600/20"
        >
          {isSignIn ? 'Sign In' : 'Create Account'}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-500">Or</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full text-gray-600 dark:text-gray-300 text-sm font-medium
            hover:text-rose-600 dark:hover:text-rose-400 
            transition-colors duration-200"
        >
          {isSignIn 
            ? "Don't have an account? Create one" 
            : 'Already have an account? Sign in'}
        </button>
      </motion.form>
    </Modal>
  );
}