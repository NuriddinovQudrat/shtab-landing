import dynamic from "next/dynamic";
import { Hero } from "./components";

const Statistics = dynamic(() => import("./components/statistics"));
const About = dynamic(() => import("./components/about"));
const Employees = dynamic(() => import("./components/employees"));
const Brands = dynamic(() => import("./components/brands"));
const UsefulInfo = dynamic(() => import("./components/useful-info"));
const Fresh = dynamic(() => import("./components/fresh"));
const Dried = dynamic(() => import("./components/dried"));
const Processed = dynamic(() => import("./components/processed"));
const Assistence = dynamic(() => import("./components/assistence"));
const Contact = dynamic(() => import("./components/contact"));
const Location = dynamic(() => import("./components/location"));
const Agrokomakchi = dynamic(() => import("./components/agrokomakchi"));

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <Statistics />
      <About />
      <Employees />
      <Brands />
      <UsefulInfo />
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
