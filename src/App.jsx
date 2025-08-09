import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import BookingButtons from "./components/BookingButtons";
import Marquee from "./components/Marquee";
import OFFERS from "./components/OFFERS";
import PLAYTIME from "./components/PLAYTIME";
import Rooms from "./components/Rooms";
import Events from "./components/Events";
import Footer from "./components/footer";

function App() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const [isLocoReady, setIsLocoReady] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.7,
      });

      // بعد تهيئة locomotiveScroll، نعلم أنه جاهز
      setIsLocoReady(true);

      // حدث السكروول لما الصفحة تخلص تحميل (صور، فيديو، الخ)
      window.addEventListener("load", () => {
        locoScroll.current.update();
      });
    }

    return () => {
      if (locoScroll.current) {
        locoScroll.current.destroy();
      }
      window.removeEventListener("load", () => {
        locoScroll.current && locoScroll.current.update();
      });
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <section>
        <Navbar />
      </section>

      <section data-scroll-section>
        {/* مرر locoScroll فقط لو جاهز */}
        {isLocoReady && <Hero locoScroll={locoScroll.current} />}
      </section>

      <section data-scroll-section>
        <Marquee />
      </section>

      <section id="offers" data-scroll-section>
        <OFFERS />
      </section>

      <section data-scroll-section>
        <PLAYTIME />
      </section>

      <section data-scroll-section>
        <Rooms />
      </section>

      <section data-scroll-section>
        <Events />
      </section>

      {/* <section data-scroll-section>
        <BookingButtons />
      </section> */}

      <section data-scroll-section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
