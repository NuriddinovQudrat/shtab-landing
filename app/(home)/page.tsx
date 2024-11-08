import {
  Brands,
  Contact,
  About,
  Farming,
  Foods,
  Hero,
  Innovation,
  Location,
  Statistics,
} from "./components";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <Statistics />
      <About />
      <Brands />
      <Foods />
      <Innovation />
      <Farming />
      <Contact />
      <hr />
      <Location />
      <div className="container mx-auto"></div>
    </div>
  );
}
