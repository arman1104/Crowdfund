import HeroCard from "./components/hero/HeroCard";
import HeroSection from "./components/hero/HeroSection";

const App = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection />
      <div className="-mt-20">
        <HeroCard />
      </div>
    </main>
  );
};

export default App;
