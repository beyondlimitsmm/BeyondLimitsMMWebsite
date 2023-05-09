import { useEffect } from "react";
import "./App.css";
import Messenger from "./assets/messenger.png";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ContactSection } from "./section/ContactSection";
import { HeroSection } from "./section/HeroSection";
import { OurService } from "./section/OurService";
import { OurTeam } from "./section/TeamMember";
import { WhyChooseUs } from "./section/WhyChooseUs";
import { Workflow } from "./section/Workflow";

function App() {
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

      <div className="fixed right-5 bottom-5 z-50 h-14 w-14 rounded-full bg-white p-2 shadow-xl md:right-10 md:bottom-10">
        <a target="_blank" href="https://m.me/beyondlimitsmm">
          <img src={Messenger} alt="Messenger" width={56} height={56} />
        </a>
      </div>
    </div>
  );
}

export default App;
