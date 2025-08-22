import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Splash = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // notify App.js that splash is done
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-yellow-100 to-yellow-300">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="text-6xl font-bold mb-6"
      >
        🥛 MilkCo
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-700"
      >
        Loading your Milk Collection System...
      </motion.div>
    </div>
  );
};

export default Splash;
