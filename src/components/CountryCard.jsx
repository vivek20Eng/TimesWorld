// components/CountryCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const CountryCard = ({ country, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="flex">
          <div className="w-1/3">
            <img
              src={country.flag || "/api/placeholder/150/150"}
              alt={`${country.name} flag`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="font-semibold">{country.name}</h3>
            <p className="text-gray-600">{country.region}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
