import { Navbar } from "./components";
import { Hero } from "./components";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <div className="container mx-auto">
        <Hero />
      </div>
    </div>
  );
}
