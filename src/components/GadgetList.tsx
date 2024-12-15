import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const gadgets = [
  {
    name: 'Gaming Console',
    price: '$25/day',
    features: [
      'Latest PS5/Xbox Series X',
      '2 Controllers included',
      'Popular games library',
      '4K gaming support',
    ],
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'Professional Camera',
    price: '$45/day',
    features: [
      'Full-frame mirrorless',
      'Multiple lenses included',
      '4K video capability',
      'Professional accessories',
    ],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'Premium Laptop',
    price: '$35/day',
    features: [
      'Latest MacBook Pro/Dell XPS',
      '16GB RAM minimum',
      'Professional software suite',
      'Extended battery life',
    ],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
];

export default function GadgetList() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleListGadget = () => {
    if (!user) {
      navigate('/list-gadget');
    } else {
      navigate('/list-gadget');
    }
  };

  return (
    <div id="gadgets" className="bg-white dark:bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Available Gadgets
          </h2>
          <p className="mt-4  mb-6 text-xl text-gray-600 dark:text-gray-400">
            Choose from our selection of premium gadgets
          </p>
        </div>

        {/* Mobile view: Horizontal scroll */}
        <div className="block lg:hidden overflow-x-auto pb-6 -mx-4">
          <div className="flex px-4 space-x-4 min-w-max">
            {gadgets.map((gadget) => (
              <motion.div
                key={gadget.name}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex-shrink-0 w-[280px] rounded-lg shadow-lg overflow-hidden bg-white dark:bg-zinc-900 dark:border border-zinc-700 dark:hover:border-white"
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={gadget.image} alt={gadget.name} />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{gadget.name}</h3>
                  <p className="mt-2 text-lg text-rose-600 dark:text-rose-600">{gadget.price}</p>
                  <ul className="mt-4 space-y-2">
                    {gadget.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-rose-600 text-white px-3 py-2 rounded-md hover:bg-rose-600/90 transition-colors">
                    Rent Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop view: Grid layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-12">
          {gadgets.map((gadget) => (
            <motion.div
              key={gadget.name}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-zinc-900 dark:border border-zinc-700 dark:hover:border-white"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={gadget.image} alt={gadget.name} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{gadget.name}</h3>
                <p className="mt-2 text-lg text-rose-600 dark:text-rose-600">{gadget.price}</p>
                <ul className="mt-4 space-y-2">
                  {gadget.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-2 text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-rose-600 text-white px-3 py-2 rounded-md hover:bg-rose-600/90 transition-colors">
                  Rent Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleListGadget}
            className="inline-flex items-center px-6 py-3 border border-rose-600 text-rose-600 dark:text-white dark:border-rose-600 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/50 transition-colors"
          >
            List Your Gadget for Rent
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
