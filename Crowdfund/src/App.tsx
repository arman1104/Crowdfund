import AboutSection from "./components/about/AboutSection";
import HeroCard from "./components/hero/HeroCard";
import HeroSection from "./components/hero/HeroSection";
import BackThisProject from "./components/modal/backthisproject/BackThisProject";
import StatsCard from "./components/stats/StatsCard";

const App = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection />
      <div className="-mt-20">
        <HeroCard />
      </div>
      <StatsCard />
      <AboutSection />
      <BackThisProject />
    </main>
  );
};

export default App;
