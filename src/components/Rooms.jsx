import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, useInView, useAnimation } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Rooms() {
  const images = [
    {
      src: "imgi_272_DSC09849-Edit-1400x933.jpg.webp",
      title: "4 BED | COME PLAY",
      subtitle: "PENTHOUSE W/POOL",
    },
    {
      src: "imgi_269_01-2BPH-1400x874.jpg.webp",
      title: "5 BED | PENTHOUSE DUPLEX",
      subtitle: "W/POOL",
    },
    {
      src: "imgi_266_Luxe-2-Bedroom-Suite-1400x933.webp",
      title: "LUXE 2 BEDROOM",
      subtitle: "SUITE W/POOL",
    },
    {
      src: "imgi_263_Luxe-1-Bedroom-Suite-1400x933.webp",
      title: "LUXE 1 BEDROOM",
      subtitle: "SUITE W/POOL",
    },
    {
      src: "imgi_257_Junior-Suite-Sea-View-1400x933.webp",
      title: "JUNIOR SUITE",
      subtitle: "SEA VIEW",
    },
    {
      src: "imgi_251_Luxe-Sea-View-1400x933.webp",
      title: "LUXE SEA VIEW",
      subtitle: "",
    },
    {
      src: "imgi_245_Superior-Double-Queen-1400x933.webp",
      title: "SUPERIOR DOUBLE QUEEN",
      subtitle: "",
    },
    {
      src: "imgi_239_10300060-HDR-Edit-1-1400x933.webp",
      title: "LUXURY ROOM",
      subtitle: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // refs and animation controls for sections
  const headerRef = useRef(null);
  const sliderRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const sliderInView = useInView(sliderRef, { once: true, margin: "-100px" });

  const headerControls = useAnimation();
  const sliderControls = useAnimation();

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (sliderInView) {
      sliderControls.start("visible");
    }
  }, [sliderInView, sliderControls]);

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="w-full bg-black relative">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={fadeUp}
        className="bg-black text-white flex flex-col md:flex-row justify-between md:items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 md:py-12"
      >
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
            ROOMS
          </h1>
          <img
            src="imgi_224_holograph-new.png"
            alt="holograph"
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 items-start md:items-end mt-4 md:mt-0">
          <span className="text-base sm:text-lg md:text-2xl ">
            Lifestyle Meets Luxury
          </span>
          <button className="flex items-center gap-1 capitalize font-bold group bg-black  px-4 py-2 transition">
            All Rooms
            <img
              src="imgi_142_button-play-icon.svg"
              alt="holograph"
              className="h-6 w-6 "
            />
          </button>
        </div>
      </motion.div>

      {/* Small & Medium screens (less than md) */}
      <motion.div
        ref={sliderRef}
        initial="hidden"
        animate={sliderControls}
        variants={containerVariants}
        className="md:hidden px-4 py-6"
      >
        <Swiper
          modules={[Navigation]}
          loop={true}
          onSwiper={setSwiperInstance}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 15 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div variants={cardVariants}>
                <div
                  className="w-full h-[550px] bg-center bg-cover relative overflow-hidden "
                  style={{ backgroundImage: `url(${img.src})` }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 right-4 uppercase font-bold">
                    <h2 className="text-white text-lg">{img.title}</h2>
                    {img.subtitle && (
                      <p className="text-white text-lg">{img.subtitle}</p>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <button className="bg-black text-white px-6 py-2 flex items-center gap-2 font-bold uppercase text-sm hover:bg-white hover:text-black transition">
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Navigation inside swiper */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center border border-white/35 bg-black text-white hover:bg-white hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <span className="text-white font-bold text-lg">
              {currentIndex} / {images.length}
            </span>

            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center bg-black text-white border border-white/35 hover:bg-white hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </motion.div>

      {/* Large screens (md and up) */}
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          className="relative"
        >
          {/* Gray bar */}
          <div className="absolute top-0 left-0 w-full flex items-center px-6 bg-gray-500/20 backdrop-blur-sm z-20">
            <span className="bg-black text-white px-4 py-1 md:px-7 md:py-2 ms-10 md:ms-25 uppercase font-bold text-sm md:text-base">
              All Rooms
            </span>
          </div>

          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-[50vh] md:h-screen bg-center bg-cover relative"
                style={{ backgroundImage: `url(${img.src})` }}
              >
                <div className="absolute bottom-8 left-8 md:left-32 text-white">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {img.title}
                  </h2>
                  <button className="bg-black text-white px-5 py-2 md:px-7 md:py-3 flex items-center gap-2 font-bold group text-sm md:text-base">
                    Explore
                    <img
                      src="imgi_142_button-play-icon.svg"
                      alt="arrow"
                      className="h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation and counter */}
          <div className="absolute top-4 right-4 md:top-20 md:right-8 z-20 flex items-center gap-4">
            <button
              ref={prevRef}
              className="w-8 h-8 md:w-10 md:h-10   flex items-center justify-center bg-gray-600/40 text-white group"
            >
              <img
                src="imgi_92_arrow-left-two.svg"
                alt="Prev"
                className="h-3 w-3 md:h-4 md:w-4 transform transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>
            <span className="text-white text-sm md:text-base">
              {currentIndex}/{images.length}
            </span>
            <button
              ref={nextRef}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-600/40 text-white group"
            >
              <img
                src="imgi_94_arrow-right-two.svg"
                alt="Next"
                className="h-3 w-3 md:h-4 md:w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
