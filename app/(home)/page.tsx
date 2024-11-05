import { Ecosystem, Hero, Statistics } from "./components";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <Statistics />
      <Ecosystem />
      <div className="container mx-auto"></div>
    </div>
  );
}
