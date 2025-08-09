import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export default function Events() {
  const events = [
    {
      date: "30th August, 10 PM",
      title: "Sunset Beach ",
      img: "imgi_97_FB_Web-43-1400x788.jpg.webp",
    },
    {
      date: "15th july, 5 PM",
      title: "Sunset Beach ",
      img: "imgi_98_FB-WEB-3-1-1400x788.jpg.webp",
    },
    {
      date: "15th july, 5 PM",
      title: " Sunset Beach",
      img: "imgi_99_FB_Web-36-1400x788.jpg.webp",
    },
    {
      date: "10th january, 1 PM",
      title: "Sunset Beach ",
      img: "imgi_100_FB_Web-10-1400x788.jpg.webp",
    },
  ];
  const culinarySlides = [
    {
      bigImg: "imgi_103_FB_Web-31-768x432.jpg.webp",
      svgOverlay: "imgi_102_penthouse.svg",
    },
    {
      bigImg: "imgi_105_FB_Web-41-768x432.jpg.webp",
      svgOverlay: "imgi_104_bohelialogo.svg",
    },
    {
      bigImg: "imgi_107_Capesante-768x511.jpg.webp",
      svgOverlay: "imgi_106_cinque-1-1.svg",
    },
    {
      bigImg: "imgi_110_FB_Web-5-768x432.jpg.webp",
      svgOverlay: "imgi_109_Maiden-logo.svg",
    },
    {
      bigImg: "imgi_112_FB_Web-34-768x432.jpg.webp",
      svgOverlay: "imgi_111_jade-logo.svg",
    },
  ];
  const slides = [
    {
      img: "imgi_124_STAY-min-768x979.png.webp",
      title: "ROOMS",
      svg: "imgi_224_holograph-new.png",
    },
    {
      img: "imgi_125_EAT-AND-DRINK-min-768x979.png.webp",
      title: "EAT AND DRINK",
      svg: "imgi_224_holograph-new.png",
    },
    {
      img: "imgi_126_PLAY-min-768x979.png.webp",
      title: "PLAY",
      svg: "imgi_224_holograph-new.png",
    },
    {
      img: "imgi_127_RELAX-min-768x979.png.webp",
      title: "RELAX",
      svg: "imgi_224_holograph-new.png",
    },
  ];

  const HotSlides = [
    {
      img: "imgi_130_download-4-768x508.jpeg.webp",
      title: "Coastal Serenity by the Sea",
      svg: "imgi_129_Mask-group-19.svg",
    },
    {
      img: "imgi_132_James-Grant-at-Beach-by-FIVEs-Bohemia-credit_-FIVE-scaled-1-768x513.jpg.webp",
      title: "James Grant’s Beach Vibes",
      svg: "imgi_131_png-transparent-esquire-logo-gq-magazine-text-text-fashion-logo-1.svg",
    },
    {
      img: "imgi_134_download.jpeg.webp",
      title: "Elegance in Vogue Arabia",
      svg: "imgi_133_vogue-arabia-full-1.svg",
    },
    {
      img: "imgi_136_five-jumeirah-village-dubai-sustainability.webp",
      title: "Sustainability at Jumeirah Village",
      svg: "imgi_135_logo.svg",
    },
    {
      img: "imgi_138_25hours20dubai-aug22-pr-20global-Ingrid20Rasmussen1-768x432.jpg.webp",
      title: "Global Inspiration from Dubai",
      svg: "imgi_137_logo-cnt-india-reverse.svg",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);
  const [isBeginning2, setIsBeginning2] = useState(true);
  const [isEnd2, setIsEnd2] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Custom hook for in-view detection
  const useAnimateOnView = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true, margin: "-20%" });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return [ref, controls];
  };

  // Create animation triggers for each section
  const [section1Ref, section1Controls] = useAnimateOnView();
  const [section2Ref, section2Controls] = useAnimateOnView();
  const [section3Ref, section3Controls] = useAnimateOnView();
  const [section4Ref, section4Controls] = useAnimateOnView();
  const [section5Ref, section5Controls] = useAnimateOnView();
  const [section6Ref, section6Controls] = useAnimateOnView();
  const [section7Ref, section7Controls] = useAnimateOnView();
  const [section8Ref, section8Controls] = useAnimateOnView();

  return (
    <section className="w-full relative my-15 overflow-x-hidden overflow-y-hidden mx-auto">
      <div className="md:px-4">
        {/* Header */}
        <motion.div
          ref={section1Ref}
          initial="hidden"
          animate={section1Controls}
          variants={fadeIn}
          className="flex flex-wrap md:flex-nowrap justify-between lg:items-center gap-4 px-4 sm:px-8 md:px-12 py-6 md:pt-12"
        >
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
              EVENTS
            </h1>
            <motion.img
              variants={scaleUp}
              src="imgi_224_holograph-new.png"
              alt="holograph"
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
          </div>
          <div className="flex flex-col gap-2 items-start md:items-end mt-4 md:mt-0 flex-shrink">
            <motion.span
              variants={slideIn}
              className="text-base sm:text-lg md:text-xl text-center md:text-right"
            >
              Immersive Entertainment at FIVE
            </motion.span>
            <motion.button
              variants={slideIn}
              className="flex items-center gap-1 capitalize font-bold group px-4 py-2 transition whitespace-nowrap"
            >
              All Events
              <img
                src="imgi_142_button-play-icon.svg"
                alt="holograph"
                className="h-6 w-6 filter invert"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Swiper Navigation */}
        <motion.div
          ref={section2Ref}
          initial="hidden"
          animate={section2Controls}
          variants={fadeIn}
          className="hidden md:flex items-center gap-2 justify-end px-4 sm:px-8 md:px-12 mb-8"
        >
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`w-13 h-13 flex items-center justify-center transition ${
              isBeginning
                ? "bg-gray-300 cursor-not-allowed opacity-50"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <img src="imgi_20_arrow-left.svg" alt="Prev" className="h-5 w-5" />
          </button>
          <button
            ref={nextRef}
            disabled={isEnd}
            className={`w-13 h-13 flex items-center justify-center transition ${
              isEnd
                ? "bg-gray-300 cursor-not-allowed opacity-50"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <img src="imgi_22_arrow-right.svg" alt="Next" className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div
          ref={section3Ref}
          initial="hidden"
          animate={section3Controls}
          variants={fadeIn}
          className="px-4 sm:px-8 md:px-12"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            centeredSlides={false}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 2.2 }, // xs & sm
              768: { slidesPerView: 1.4 }, // md+
            }}
            style={{ overflow: "visible" }}
          >
            {events.map((event, idx) => (
              <SwiperSlide
                key={idx}
                className="bg-white"
                style={{ minWidth: "300px" }}
              >
                {isSmallScreen ? (
                  <motion.div
                    variants={scaleUp}
                    className="border border-gray-300"
                  >
                    <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase">
                      {event.date}
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-[220px] object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl px-4 py-3">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 px-4 pb-4">
                      <button className="bg-black text-white font-bold px-4 py-2 flex items-center gap-2 transition">
                        BOOK NOW
                        <img
                          src="imgi_142_button-play-icon.svg"
                          alt="play"
                          className="h-4 w-4"
                        />
                      </button>
                      <a
                        href="https://wa.me/201234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 py-2 px-3 flex items-center justify-center hover:bg-green-600 transition"
                      >
                        <img
                          src="imgi_96_whatsapp.png.webp"
                          alt="WhatsApp"
                          className="h-6 w-6"
                        />
                      </a>
                      <a
                        href="tel:+201234567890"
                        className="bg-gray-100 py-2 px-3 flex items-center justify-center hover:bg-gray-200 transition"
                      >
                        <img
                          src="imgi_209_default.svg"
                          alt="Call"
                          className="h-6 w-6"
                        />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase">
                      {event.date}
                    </div>
                    <div className="flex justify-between py-4 border-x border-gray-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-3 gap-3 sm:gap-0">
                        <h3 className="text-2xl sm:text-3xl">{event.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 pe-3 flex-wrap">
                        <button className="bg-black text-white font-bold px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 transition whitespace-nowrap">
                          BOOK <span>NOW</span>
                          <img
                            src="imgi_142_button-play-icon.svg"
                            alt="play"
                            className="h-4 w-4"
                          />
                        </button>
                        <a
                          href="https://wa.me/201234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 py-3 px-3 md:py-4 md:px-4 flex items-center justify-center hover:bg-green-600 transition"
                        >
                          <img
                            src="imgi_96_whatsapp.png.webp"
                            alt="WhatsApp"
                            className="h-6 w-6"
                          />
                        </a>
                        <a
                          href="tel:+201234567890"
                          className="bg-gray-100 py-3 px-3 md:py-4 md:px-4 flex items-center justify-center hover:bg-gray-200 transition"
                        >
                          <img
                            src="imgi_209_default.svg"
                            alt="Call"
                            className="h-6 w-6"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* بعد نهاية الـ Swiper */}
        <motion.div
          ref={section4Ref}
          initial="hidden"
          animate={section4Controls}
          variants={fadeIn}
          className="px-4 sm:px-8 md:px-12 mt-16"
        >
          {/* الهيدر الجديد */}
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[145px] font-bold">
                Pacha Icons{" "}
              </h1>
              <motion.img
                variants={scaleUp}
                src="imgi_225_pacha-cherry-icon.svg"
                alt="Pacha Cherry"
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
              />
            </div>
            <motion.div
              variants={slideIn}
              className="text-lg sm:text-xl md:text-2xl font-medium"
            >
              at FIVE LUXE
            </motion.div>
          </div>

          {/* السلايد الواحدة */}
          <div
            className="bg-white"
            style={{ minWidth: "300px", maxWidth: "830px" }}
          >
            {isSmallScreen ? (
              <motion.div variants={scaleUp} className="border border-gray-300">
                <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase">
                  15 AUG 2025
                </div>
                <div className="overflow-hidden">
                  <img
                    src="imgi_189_FB_Web-95-1.jpg.webp"
                    alt="Pacha Event"
                    className="w-full h-[220px] object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl px-4 py-3">Pacha Night</h3>
                <div className="flex items-center gap-2 px-4 pb-4">
                  <button className="bg-black text-white font-bold px-4 py-2 flex items-center gap-2 transition">
                    BOOK NOW
                    <img
                      src="imgi_142_button-play-icon.svg"
                      alt="play"
                      className="h-4 w-4"
                    />
                  </button>
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 py-2 px-3 flex items-center justify-center hover:bg-green-600 transition"
                  >
                    <img
                      src="imgi_96_whatsapp.png.webp"
                      alt="WhatsApp"
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase ">
                  15 AUG 2025
                </div>
                <div className="flex justify-between py-4 border-x border-gray-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-3 gap-3 sm:gap-0">
                    <h3 className="text-2xl sm:text-3xl">Pacha Night</h3>
                  </div>
                  <div className="flex items-center gap-2 pe-3 flex-wrap">
                    <button className="bg-black text-white font-bold px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 transition whitespace-nowrap">
                      BOOK <span>NOW</span>
                      <img
                        src="imgi_142_button-play-icon.svg"
                        alt="play"
                        className="h-4 w-4"
                      />
                    </button>
                    <a
                      href="https://wa.me/201234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 py-3 px-3 md:py-4 md:px-4 flex items-center justify-center hover:bg-green-600 transition"
                    >
                      <img
                        src="imgi_96_whatsapp.png.webp"
                        alt="WhatsApp"
                        className="h-6 w-6"
                      />
                    </a>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    src="imgi_189_FB_Web-95-1.jpg.webp"
                    alt="Pacha Event"
                    className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          ref={section5Ref}
          initial="hidden"
          animate={section5Controls}
          variants={fadeIn}
          className="px-4 sm:px-8 md:px-12 mt-24"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold">YOUR CULINARY PLAYGROUND</h2>

            <div className="hidden md:flex items-center gap-2">
              <button
                ref={prevRef2}
                disabled={isBeginning2}
                className={`w-13 h-13 flex items-center justify-center transition ${
                  isBeginning2
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
                ref={nextRef2}
                disabled={isEnd2}
                className={`w-13 h-13 flex items-center justify-center transition ${
                  isEnd2
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
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              prevEl: prevRef2.current,
              nextEl: nextRef2.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef2.current;
              swiper.params.navigation.nextEl = nextRef2.current;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning2(swiper.isBeginning);
              setIsEnd2(swiper.isEnd);
            }}
            breakpoints={{
              0: { slidesPerView: 1.3 }, // xs & sm
              920: { slidesPerView: 1.3 }, // md+
            }}
            style={{ overflow: "visible" }}
          >
            {culinarySlides.map(({ bigImg, svgOverlay }, idx) => (
              <SwiperSlide
                key={idx}
                className="relative overflow-hidden cursor-pointer"
              >
                <motion.div variants={scaleUp}>
                  <img
                    src={bigImg}
                    alt={`Culinary Slide ${idx + 1}`}
                    className="w-full h-[220px] sm:h-[280px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105 relative z-0"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  ></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                    <img
                      src={svgOverlay}
                      alt="Overlay Icon"
                      className="h-16 w-auto sm:h-20"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          ref={section6Ref}
          initial="hidden"
          animate={section6Controls}
          variants={fadeIn}
          className="px-4 sm:px-8 md:px-12 my-20"
        >
          <div className="border-b border-black w-full mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-bold md:w-2/3 mt-10 mb-15">
            REDIS COVER <br /> YOUR SENSES
          </h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            style={{ overflow: "visible" }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
              },
              500: {
                slidesPerView: 2.3,
                slidesPerGroup: 3,
              },

              1050: {
                slidesPerView: 3.3,
                slidesPerGroup: 3,
              },
              1285: {
                slidesPerView: 4,
                slidesPerGroup: 3,
              },
            }}
          >
            {slides.map(({ img, title, svg }, idx) => (
              <SwiperSlide key={idx} className="flex flex-col items-center">
                <motion.div
                  variants={scaleUp}
                  className="overflow-hidden w-full cursor-pointer"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </motion.div>
                <div className="flex items-center gap-2 mt-4">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <img src={svg} alt="icon" className="w-4 h-4" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          ref={section7Ref}
          initial="hidden"
          animate={section7Controls}
          variants={fadeIn}
          className="px-4 sm:px-8 md:px-12 mt-35"
        >
          <h2 className="text-3xl md:text-5xl font-bold md:w-2/3 my-10">
            SUSTAINABLE INDULGENCE
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div variants={slideIn} className="w-full md:w-2/3">
              <img
                src="imgi_204_ESG-PALM.png.webp"
                alt="Sustainable Indulgence"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="w-full md:w-1/3 flex flex-col gap-6 text-gray-800"
            >
              <p>
                At FIVE Palm Jumeirah, Luxury blends with Eco-Responsibility
                creating a Sustainable Entertainment Ecosystem. LEED Platinum
                Certified, and with a 'You-Can-Have-It-All' mindset, we harness
                technology and innovation for guilt-free indulgence.
              </p>

              <div className="flex flex-row divide-x sm:divide-gray-300 md:flex-col md:divide-x-0 md:gap-8">
                <div className="sm:flex-1  px-4 md:px-0">
                  <h3 className="font-semibold text-base sm:text-sm md:text-lg mb-1">
                    CARBON
                  </h3>
                  <p className="text-sm sm:text-xs md:text-base">
                    5x More Carbon Efficient vs the Average Luxury Resort in UAE
                    (CHSB 2023)
                  </p>
                </div>

                <div className="sm:flex-1  px-4 md:px-0">
                  <h3 className="font-semibold text-base sm:text-sm md:text-lg mb-1">
                    ELECTRICITY
                  </h3>
                  <p className="text-sm sm:text-xs md:text-base">
                    100% of Electricity sourced through Green Power
                  </p>
                </div>

                <div className="sm:flex-1  px-4 md:px-0">
                  <h3 className="font-semibold text-base sm:text-sm md:text-lg mb-1">
                    WATER
                  </h3>
                  <p className="text-sm sm:text-xs md:text-base">
                    40.6% Reduction in Water Consumption per Capita in (2023 vs
                    2020)
                  </p>
                </div>
              </div>

              <motion.button className="flex items-center gap-2 font-semibold mt-4">
                KNOW MORE
                <img
                  src="imgi_142_button-play-icon.svg"
                  alt="Arrow icon"
                  className="w-5 h-5 filter invert"
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={section8Ref}
          initial="hidden"
          animate={section8Controls}
          variants={fadeIn}
          className="px-4 sm:px-8 md:px-12 md:mt-35 mt-20"
        >
          <div className="flex flex-wrap justify-between items-center my-10">
            <h2 className="text-3xl md:text-5xl font-bold">
              HOT OFF THE PRESS
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 font-semibold mt-0"
            >
              VEIW ALL
              <img
                src="imgi_142_button-play-icon.svg"
                alt="Arrow icon"
                className="w-5 h-5 filter invert"
              />
            </motion.button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            style={{ overflow: "visible" }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
              },
              500: {
                slidesPerView: 2.3,
                slidesPerGroup: 3,
              },

              1050: {
                slidesPerView: 3.3,
                slidesPerGroup: 3,
              },
              1285: {
                slidesPerView: 5,
                slidesPerGroup: 3,
              },
            }}
          >
            {HotSlides.map(({ img, title, svg }, idx) => (
              <SwiperSlide
                key={idx}
                className="flex flex-col bg-black text-white w-64 h-72 p-4 relative"
                style={{ minWidth: "16rem", minHeight: "18rem" }}
              >
                <motion.div variants={scaleUp}>
                  <img
                    src={svg}
                    alt="icon"
                    className="w-15 h-15 absolute top-0 left-4"
                  />
                  <div className="flex-grow flex justify-center items-center overflow-hidden mt-12 mb-2">
                    <img
                      src={img}
                      alt={title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3
                    className="text-center text-lg font-semibold truncate"
                    style={{ height: "2.5rem" }}
                    title={title}
                  >
                    {title}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
