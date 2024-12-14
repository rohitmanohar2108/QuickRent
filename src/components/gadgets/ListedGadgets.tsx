import React from 'react';
import { motion } from 'framer-motion';
import GadgetCard from './GadgetCard';
import { toast } from 'react-hot-toast';

const mockGadgets = [
  {
    id: '1',
    title: 'Sony A7III Camera',
    category: 'camera',
    dailyRate: 45,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  },
  {
    id: '2',
    title: 'MacBook Pro 16"',
    category: 'laptop',
    dailyRate: 35,
    status: 'rented',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
  },
] as const;

export default function ListedGadgets() {
  const handleEdit = (id: string) => {
    // Mock edit functionality
    toast.success('Edit functionality coming soon!');
  };

  const handleDelete = (id: string) => {
    // Mock delete functionality
    toast.success('Delete functionality coming soon!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-gary-800 dark:text-white mb-8">
        Your Listed Gadgets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGadgets.map((gadget) => (
          <GadgetCard
            key={gadget.id}
            gadget={gadget}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </motion.div>
  );
}