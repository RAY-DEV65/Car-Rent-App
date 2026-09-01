import AboutHero from "../components/about-hero/AboutHero";
import WhoWeAre from "../components/who-we-are/WhoWeAre";
import AboutWhyChooseUs from "../components/about-why-choose-us/AboutWhyChooseUs";
import Statistics from "../components/statistics/Statistics";
import Mission from "../components/mission/Mission";
import AboutCTA from "../components/aboutCTA/AboutCTA";

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <AboutWhyChooseUs />
      <Statistics />
      <Mission />
      <AboutCTA />
    </div>
  );
};

export default About;
