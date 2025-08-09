import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, useInView, useAnimation } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

export default function PLAYTIME() {
  const items = [
    { img: "imgi_23_Logo_Penthouse-1-black.svg", video: "The-Penthouse.mp4" },
    { img: "imgi_24_bohemia-logo.svg", video: "AA-1-Bohemia-Front-Video.mp4" },
    { img: "imgi_25_Logo_Maiden-1-1.svg", video: "Maiden-Shanghai-1.mp4" },
    { img: "imgi_26_cinque-1-1-1-1.svg", video: "Cinque.mp4" },
    { img: "imgi_27_Logo_Bling-1.svg", video: "Bling2.mp4" },
    { img: "imgi_28_Logo_Social_Pool-1.svg", video: "Social-Pool4.mp4" },
    { img: "imgi_29_jade-logo-1.svg", video: "25.01.08-JADE-VID.mp4" },
    { img: "imgi_30_Frame-1321316185.svg", video: "Praia.mp4" },
  ];

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // refs and animation controls
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

  // animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
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

  return (
    <section className="w-full relative overflow-x-hidden mx-auto">
      <div className="md:px-11">
        {/* Title and Icons */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="flex items-center justify-between px-6 pt-25 pb-15"
        >
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-5xl font-bold">IT’S PLAYTIME</h1>
            <img
              src="imgi_224_holograph-new.png"
              alt="playtime icon"
              className="h-8 w-8"
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              id="swiper-prev"
              disabled={isBeginning}
              className={`w-13 h-13 flex items-center justify-center transition ${
                isBeginning
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <img
                src="imgi_20_arrow-left.svg"
                alt="Prev"
                className="h-5 w-5"
              />
            </button>
            <button
              id="swiper-next"
              disabled={isEnd}
              className={`w-13 h-13 flex items-center justify-center transition ${
                isEnd
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <img
                src="imgi_22_arrow-right.svg"
                alt="Next"
                className="h-5 w-5"
              />
            </button>
          </div>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          variants={containerVariants}
          className="pb-8"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            slidesOffsetBefore={16}
            style={{ overflow: "visible" }}
            navigation={{
              prevEl: "#swiper-prev",
              nextEl: "#swiper-next",
            }}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              0: { slidesPerView: 1.2, slidesOffsetBefore: 16 },
              480: { slidesPerView: 1.5, slidesOffsetBefore: 20 },
              640: { slidesPerView: 2.2, slidesOffsetBefore: 24 },
              768: { slidesPerView: 3.2, slidesOffsetBefore: 28 },
              1024: { slidesPerView: 5.2, slidesOffsetBefore: 28 },
              1280: { slidesPerView: 5.5, slidesOffsetBefore: 28 },
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} style={{ width: "auto" }}>
                <motion.div variants={cardVariants}>
                  <div>
                    <img
                      src={item.img}
                      alt={item.img}
                      className="w-full h-24 object-contain mb-2"
                    />
                    <video
                      src={item.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-90 object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Description Section */}
        <div className="px-6 my-8">
          <div className="border-b border-black w-full mb-6"></div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 my-12">
            <h2 className="text-3xl md:text-5xl font-bold md:w-2/3">
              A CELEBRATORY EXPERIENCE
            </h2>
            <p className="text-gray-700 leading-relaxed md:w-2/3">
              Dubbed the Hottest Hotel in Dubai, Indulge Yourself at our
              Dare-to-be-Different Immersive Playground. Rediscover your Senses
              with our nonstop entertainment lineup, award-winning dining, top
              nightlife, industry-leading spa sanctuary, and our 150-metre
              private beach. Be Seen, Be Snapped, and Come Play at Palm
              Jumeirah’s Most Talked-About Resort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
