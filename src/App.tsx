import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./section/AboutUs";
import { ContactSection } from "./section/ContactSection";
import { HeroSection } from "./section/HeroSection";
import { OurService } from "./section/OurService";
import { OurTeam } from "./section/TeamMember";
import { WhyChooseUs } from "./section/WhyChooseUs";
import { Workflow } from "./section/Workflow";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
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
