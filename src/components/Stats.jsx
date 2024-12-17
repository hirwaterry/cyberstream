import React from "react";
import { motion } from "framer-motion";

const statsData = [
  { label: "Clients", value: "80+", delay: 0.1 },
  { label: "Companies", value: "12+", delay: 0.2 },
  { label: "Projects Completed", value: "46+", delay: 0.3 },
  { label: "Years Experience", value: "5+", delay: 0.4 },
];

const Stats = () => {
  return (
    <div className="py-16 bg-neutral-900 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide">
          Our <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Achievements</span>
        </h2>
        <p className="text-lg text-neutral-400 mt-4">
          Here's what we've accomplished so far.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stat.delay, duration: 0.6, ease: "easeOut" }}
            className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-orange-500 mb-2">
              {stat.value}
            </h3>
            <p className="text-lg text-neutral-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
