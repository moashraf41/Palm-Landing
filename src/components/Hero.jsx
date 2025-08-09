import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero({ locoScroll }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const handleExploreClick = () => {
    if (!locoScroll) {
      console.log("locoScroll not ready");
      return;
    }

    const target = document.querySelector("#offers");
    if (!target) {
      console.log("#offers element not found");
      return;
    }

    locoScroll.scrollTo(target, {
      offset: 0,
      duration: 1.5,
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  // Variants for motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.8,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Palm 25 Brand No-14400P.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text & Arrow */}
      <motion.div
        onClick={handleExploreClick}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 text-center cursor-pointer select-none"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileHover={{ opacity: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* EXPLORE Text */}
        <motion.h2
          className="text-2xl font-bold uppercase tracking-widest text-white"
          style={{ mixBlendMode: "overlay" }}
        >
          EXPLORE
        </motion.h2>

        {/* Arrow Icon */}
        <motion.div
          className="w-6 h-6 mx-auto flex items-center justify-center"
          style={{ mixBlendMode: "overlay" }}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img
            src="/imgi_142_button-play-icon.svg"
            alt="Arrow Down"
            className="w-8 h-8 rotate-90"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
