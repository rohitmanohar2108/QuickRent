import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2 } from 'lucide-react';

interface GadgetCardProps {
  gadget: {
    id: string;
    title: string;
    category: string;
    dailyRate: number;
    status: 'available' | 'rented';
    image: string;
  };
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function GadgetCard({ gadget, onEdit, onDelete }: GadgetCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-video relative">
        <img
          src={gadget.image}
          alt={gadget.title}
          className="w-full h-full object-cover"
        />
        {(onEdit || onDelete) && (
          <div className="absolute top-2 right-2 space-x-2">
            {onEdit && (
              <button 
                onClick={() => onEdit(gadget.id)}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Edit className="h-4 w-4 text-gray-600 dark:text-white" />
              </button>
            )}
            {onDelete && (
              <button 
                onClick={() => onDelete(gadget.id)}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </button>
            )}
          </div>
        )}
        <div className="absolute bottom-2 left-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            gadget.status === 'available'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          }`}>
            {gadget.status.charAt(0).toUpperCase() + gadget.status.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {gadget.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {gadget.category}
        </p>
        <p className="mt-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
          ${gadget.dailyRate}/day
        </p>
      </div>
    </motion.div>
  );
}