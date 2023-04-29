import "./App.css";
import { AboutUs } from "./section/AboutUs";
import { ContactSection } from "./section/ContactSection";
import { HeroSection } from "./section/HeroSection";
import { OurService } from "./section/OurService";
import { OurTeam } from "./section/TeamMember";
import { WhyChooseUs } from "./section/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <OurService></OurService>
      <OurTeam></OurTeam>
      <WhyChooseUs></WhyChooseUs>

      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
