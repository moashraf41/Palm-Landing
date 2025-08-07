import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import BookingButtons from "./components/BookingButtons";
import Marquee from "./components/Marquee";
import OFFERS from "./components/OFFERS";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Marquee />

      <OFFERS />

      <BookingButtons />
    </>
  );
}

export default App;
