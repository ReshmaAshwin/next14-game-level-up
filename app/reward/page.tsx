"use client";
import React from "react";
import { motion } from "framer-motion";

interface RewardPopupProps {
  isOpen: boolean;
  rewards: string[];
  onClose: () => void;
}

const RewardPopup: React.FC<RewardPopupProps> = ({ isOpen=true, onClose }) => {
  const rewards = ["Gold Badge", "500 XP", "Special Item"]; // Example rewards

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-sm mx-auto relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Rewards Unlocked!</h2>
        <ul className="space-y-2">
          {rewards.map((reward, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-2 bg-yellow-200 rounded-md"
            >
              {reward}
            </motion.li>
          ))}
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default RewardPopup;
