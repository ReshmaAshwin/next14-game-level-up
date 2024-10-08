"use client";
import React from "react";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  coins: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const badgeVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.7 } },
};

const heartBeatVariants = {
  rest: { scale: 1 },
  beat: {
    scale: 1.2,
    transition: {
      repeat: Infinity,
      duration: 0.9,
    },
  },
};

const RewardPopup: React.FC<RewardPopupProps> = ({
  isOpen,
  onClose,
  coins,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex z-100 items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <motion.div
        className="relative md:w-1/2  md:max-w-[600px] text-center rounded-lg p-4 z-10"
        style={{
          backgroundImage: "url('/rewardpopup.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Popup Content */}
        <div className="w-full flex justify-end">
          <CloseRoundedIcon
            onClick={onClose}
            fontSize="small"
            className="cursor-pointer w-2 h-2 border-white border-solid"
          />
        </div>
        <h2
          className="text-xl font-bold"
          style={{
            color: "#FFD700",
            textShadow:
              "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700",
          }}
        >
          Rewards Unlocked!
        </h2>
        <h3 className="text-[#FFD700]">Bravo!</h3>
        <p className="text-[#e3e4b4] text-[10px] mt-4">
          Congratulations on conquering the challenge! Your achievements have
          unlocked a treasure trove of rewards. Dive deeper into the Command
          Center for even more thrilling adventures and greater treasures
          waiting for you!
        </p>

        {/* Badge Items with Animation */}
        <motion.div
          className="flex mt-5 items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative h-[75px] w-[75px]"
            variants={badgeVariants}
          >
            <Image src="/shape.svg" width={75} height={75} alt="New Badge" />
            <div className="absolute left-3 top-2">
              <Image
                src="/goldbadge.png"
                width={75}
                height={75}
                alt="New Badge"
                className="w-[50px] h-[50px] text-center"
              />
              <p className="text-[8px] text-[#f0f335]">AEGIS Badge</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[75px] w-[75px]"
            variants={badgeVariants}
          >
            <Image src="/shape.svg" width={75} height={75} alt="coin" />
            <div className="absolute left-3 top-2">
              <Image
                src="/gold.png"
                alt="New Badge"
                width={50}
                height={50}
                className="w-[50px] h-[50px] text-center"
              />
              <p className="text-[8px] text-[#f0f335]">{coins} Coins</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[75px] w-[75px]"
            variants={badgeVariants}
          >
            <Image src="/shape.svg" width={75} height={75} alt="life" />
            <div className="absolute left-4 top-3">
              <motion.img
                src="/life.svg"
                alt="life"
                className="w-[45px] h-[45px] text-center"
                variants={heartBeatVariants}
                initial="rest"
                animate="beat"
              />
              <p className="text-[8px] text-[#f0f335]">Extra Life!</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RewardPopup;
