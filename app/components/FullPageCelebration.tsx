"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Sparkle from "./Sparkle";
import RewardPopup from "./RewardPopup";

interface FullPageCelebrationProps {
  level: number;
}

const FullPageCelebration: React.FC<FullPageCelebrationProps> = ({ level }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [xpBarStart, setXpBarStart] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); 
  const rewards = ["Gold Badge", "500 XP", "Special Item"]; 

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => {
      setXpBarStart(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [level]);

  const currentCoins = 18000;
  const maxCoins = 150000;
  const fillPercentage = (currentCoins / maxCoins) * 100;
  const name = "Aegis";

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 2 + i * 0.1,
      },
    }),
  };

  const handleClaimBadge = () => {
    setIsOpen(false); 
    setIsPopupOpen(true); 
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex ${
          isOpen ? "block" : "hidden"
        }`}
        style={{
          backgroundImage: "url('/temple.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="p-6 rounded-lg w-full max-w-md mx-auto relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-20 lg:mt-10 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-30 blur-xl"
              initial={{ scale: 0.5, opacity: 0.5, filter: "blur(20px)" }}
              animate={{ scale: 3, opacity: 0, filter: "blur(60px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <h2 className="text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent text-[36px] md:text-[54px] lg:text-[72px] font-bold relative z-10">
              LEVEL UP
              <Sparkle x="20%" y="70%" />
              <Sparkle x="70%" y="20%" />
              <Sparkle x="50%" y="50%" />
              <Sparkle x="60%" y="40%" />
              <Sparkle x="70%" y="30%" />
              <Sparkle x="30%" y="10%" />
            </h2>

            <p className="md:text-[20px] text-[18px] font-serif text-center text-white md:text-[#4B0082] font-bold z-10">
              CONGRATULATIONS
            </p>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="mt-6 flex justify-center relative z-10"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 1,
              }}
            >
              <img
                src="/goldbadge.png"
                alt="New Badge"
                className="h-[150px] w-[150px] text-center"
              />
            </motion.div>

            <div className="text-[#3c261b] mt-2 text-center font-bold text-3xl flex justify-center space-x-1 relative z-10">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="relative mt-4 h-4 bg-[#3c261b] p-1 rounded overflow-hidden shadow-lg">
              <motion.div
                className="h-full bg-[#FEBE10]"
                initial={{ width: "0%" }}
                animate={{ width: xpBarStart ? `${fillPercentage}%` : "0%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>

            <p className="text-center text-[#f5d98d] text-[12px] mt-2">
              {currentCoins} / {maxCoins} Coins
            </p>

            <div className="flex justify-center mt-6">
              <button
                className="px-6 py-2 z-10 cursor-pointer bg-gradient-to-r from-gold-light to-gold-dark text-[#3c261b] font-bold rounded-full hover:shadow-lg"
                onClick={handleClaimBadge}
              >
                Claim Badge
              </button>
            </div>

            <p className="mt-6 text-center text-[#f6e1a9] md:text-[10px] text-[10px] leading-relaxed relative z-10">
              To claim your new badge, you'll need to transfer your previous
              badge from your wallet for it to be burned in exchange for the new
              one. If there's insufficient gas in your wallet, the transaction
              will be canceled. You can always visit your Inventory and claim
              your badge at any time.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Reward Popup */}
      {isPopupOpen && (
        <RewardPopup
          isOpen={isPopupOpen}
          rewards={rewards}
          onClose={() => setIsPopupOpen(false)}
          coins={currentCoins}
        />
      )}
    </>
  );
};

export default FullPageCelebration;
