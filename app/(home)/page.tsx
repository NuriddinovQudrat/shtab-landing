import { Hero, Statistics } from "./components";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <Statistics />
      <div className="container mx-auto"></div>
    </div>
  );
}
