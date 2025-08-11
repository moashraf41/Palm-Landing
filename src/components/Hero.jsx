import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ locoScroll }) {
  const videoRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Start animation after 2.5 seconds
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2500);

    return () => clearTimeout(timer);
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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.8,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 1 },
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
        <source src="/Palm 25 Brand No-1440P.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* White Overlay with Animated Triangle Cutout */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full">
          <defs>
            <mask id="triangleMask">
              {/* White background */}
              <rect width="100%" height="100%" fill="white" />
              {/* Triangle cutout that expands - centered */}
              <motion.polygon
                points="740,280 790,330 740,380"
                fill="black"
                initial={{ scale: 1 }}
                animate={
                  startAnimation ? { scale: [1, 1.2, 50] } : { scale: 1 }
                }
                transition={{
                  duration: 1.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.1, 1],
                }}
              />
            </mask>
          </defs>

          {/* Apply mask to white rectangle */}
          <motion.rect
            width="100%"
            height="100%"
            fill="white"
            mask="url(#triangleMask)"
            initial={{ opacity: 1 }}
            animate={
              startAnimation
                ? {
                    opacity: [1, 1, 0],
                  }
                : {
                    opacity: 1,
                  }
            }
            transition={{
              duration: 1.8,
              times: [0, 0.7, 1],
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Content over the overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={
            startAnimation
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 1,
                }
          }
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Main Text */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-6xl font-black text-black uppercase tracking-wider">
                STAY
              </h1>
              <div className="mx-8">
                {/* Just a spacer - the real triangle is the cutout */}
                <div className="w-20"></div>
              </div>
              <h1 className="text-6xl font-black text-black uppercase tracking-wider">
                PLAY
              </h1>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-black uppercase tracking-wide">
                COME PLAY AT DUBAI'S
              </p>
              <p className="text-lg font-semibold text-black uppercase tracking-wide">
                HOTTEST BEACH HOTEL
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text & Arrow - appears after video animation */}
      <AnimatePresence>
        {startAnimation && (
          <motion.div
            onClick={handleExploreClick}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-center cursor-pointer select-none"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* EXPLORE Text */}
            <motion.h2
              className="text-2xl font-bold uppercase tracking-widest text-white mb-4"
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
