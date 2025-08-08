import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Events() {
  const events = [
    {
      date: "12 AUG 2025",
      title: "Sunset Beach Party",
      img: "imgi_97_FB_Web-43-1400x788.jpg.webp",
    },
    {
      date: "15 AUG 2025",
      title: "DJ Night Special",
      img: "imgi_98_FB-WEB-3-1-1400x788.jpg.webp",
    },
    {
      date: "20 AUG 2025",
      title: "Poolside Chill",
      img: "imgi_99_FB_Web-36-1400x788.jpg.webp",
    },
    {
      date: "25 AUG 2025",
      title: "Live Music Evening",
      img: "imgi_100_FB_Web-10-1400x788.jpg.webp",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="w-full relative mb-44 overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-wrap md:flex-nowrap justify-between lg:items-center gap-4 px-4 sm:px-8 md:px-12 lg:px-33 py-6 md:pt-12">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
            EVENTS
          </h1>
          <img
            src="imgi_224_holograph-new.png"
            alt="holograph"
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
          />
        </div>
        <div className="flex flex-col gap-2 items-start md:items-end mt-4 md:mt-0 flex-shrink">
          <span className="text-base sm:text-lg md:text-xl text-center md:text-right">
            Immersive Entertainment at FIVE
          </span>
          <button className="flex items-center gap-1 capitalize font-bold group px-4 py-2 transition whitespace-nowrap">
            All Events
            <img
              src="imgi_142_button-play-icon.svg"
              alt="holograph"
              className="h-6 w-6 filter invert"
            />
          </button>
        </div>
      </div>

      {/* Swiper Navigation */}
      <div className="hidden md:flex items-center gap-2 justify-end px-4 sm:px-8 md:px-12 lg:px-33 mb-8">
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
      </div>

      <div className="sm:px-8 md:px-12">
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
            768: { slidesPerView: 1.5 }, // md+
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
                // الشكل الجديد للشاشات الصغيرة
                <div className="border border-gray-300">
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
                    <button className="bg-black text-white font-bold px-4   py-2 flex items-center gap-2 transition">
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
                </div>
              ) : (
                // الشكل القديم للميديم فما فوق
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
      </div>
    </section>
  );
}
