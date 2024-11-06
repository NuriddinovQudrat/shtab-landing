import {
  Certifications,
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
      <div className="container mx-auto"></div>
    </div>
  );
}
