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
  Assistence,
  Agrokomakchi,
  Employees,
} from "./components";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <Statistics />
      <About />
      <Employees />
      <Brands />
      <Fresh />
      <Dried />
      <Processed />
      <Assistence />
      <Contact />
      <hr />
      <Location />
      <Agrokomakchi />
    </div>
  );
}
