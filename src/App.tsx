import { useEffect } from "react";
import "./App.css";
import Messenger from "./assets/messenger.png";

import REACTGA from "react-ga";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ContactSection } from "./section/ContactSection";
import { HeroSection } from "./section/HeroSection";
import { OurService } from "./section/OurService";
import { OurTeam } from "./section/TeamMember";
import { WhyChooseUs } from "./section/WhyChooseUs";
import { Workflow } from "./section/Workflow";

const TRACKING_ID = import.meta.env.VITE_TRACKING_ID ?? "";
REACTGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    REACTGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App relative">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <OurService></OurService>
      <Workflow></Workflow>
      <OurTeam></OurTeam>
      <WhyChooseUs></WhyChooseUs>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
