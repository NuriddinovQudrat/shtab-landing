import {
  Brands,
  Contact,
  About,
  Processed,
  Fresh,
  Hero,
  Dried,
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
      <Fresh />
      <Dried />
      <Processed />
      <Contact />
      <hr />
      <Location />
      <div className="container mx-auto"></div>
    </div>
  );
}
