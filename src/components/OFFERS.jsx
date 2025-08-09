import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function OFFERS() {
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const textControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView, textControls]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsInView, cardsControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const offers = [
    {
      img: "/imgi_16_SEVENROOMS-BG.jpg.webp",
      title: "PAY 3 STAY 4 OFFER",
    },
    {
      img: "/imgi_17_00-compressed.png.webp",
      title: "ALL-INCLUSIVE OFFER",
    },
    {
      img: "/imgi_18_FB-WEB-1.jpg.webp",
      title: "FREE HALF BOARD OFFER",
    },
  ];

  return (
    <section
      id="offers"
      className="min-h-screen w-full relative overflow-hidden "
      style={{
        background:
          "linear-gradient(135deg, #ed9fc4, #f0cac4, #a1b5de, #98aedc, #ed9fc4)",
        backgroundSize: "400% 400%",
        backgroundRepeat: "no-repeat",
        animation: "gradientShift 5s ease-in-out infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      {/* Text Section */}
      <motion.div
        ref={textRef}
        className="container mx-auto px-6 pt-30 pb-15"
        initial="hidden"
        animate={textControls}
        variants={textVariants}
      >
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            DUBAI'S HOTTEST <br /> BEACH HOTEL
          </h1>
          <p className="text-lg md:text-lg leading-relaxed opacity-90 mt-4">
            Luxury rooms and suites. 150-m private beach. Picture perfect pools.
            Insta-views. Award-winning restaurants. Stunning spa. Our
            unashamedly luxurious resort has it all!
            <br />
            <span className="font-semibold">
              Enjoy complimentary group yoga with all room bookings.
            </span>
          </p>
        </div>
      </motion.div>

      {/* Offers Section */}
      <div className="container mx-auto max-w-7xl px-6 py-8 mb-20 md:bg-white">
        <motion.div
          ref={cardsRef}
          className="text-center mb-6"
          initial="hidden"
          animate={cardsControls}
          variants={textVariants}
        >
          <h2 className="text-3xl font-bold text-white md:text-black">
            ROOM OFFERS AT FIVE
          </h2>
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
          initial="hidden"
          animate={cardsControls}
          variants={containerVariants}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              variants={cardVariants}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-white px-4 py-3  text-center">
                <h3 className="relative group text-black text-3xl font-bold uppercase transition-colors duration-300 inline-block">
                  {offer.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
