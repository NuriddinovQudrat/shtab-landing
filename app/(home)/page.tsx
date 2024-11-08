import {
  Certifications,
  Contact,
  Ecosystem,
  Farming,
  Foods,
  Hero,
  Innovation,
  Statistics,
} from "./components";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <Statistics />
      <Ecosystem />
      <Certifications />
      <Foods />
      <Innovation />
      <Farming />
      <Contact />
      <div className="container mx-auto"></div>
    </div>
  );
}
