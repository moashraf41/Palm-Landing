import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import BookingButtons from "./components/BookingButtons";
import Marquee from "./components/Marquee";
import OFFERS from "./components/OFFERS";
import PLAYTIME from "./components/PLAYTIME";
import Rooms from "./components/Rooms";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Marquee />

      <OFFERS />
      <PLAYTIME />
      <Rooms />
      <Events />
      {/* <BookingButtons /> */}
    </>
  );
}

export default App;
