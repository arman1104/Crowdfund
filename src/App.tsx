import { useState, useEffect } from "react";
import AboutSection from "./components/about/AboutSection";
import HeroCard from "./components/hero/HeroCard";
import HeroSection from "./components/hero/HeroSection";
import BackThisProject from "./components/modal/backthisproject/BackThisProject";
import ConfirmationModal from "./components/modal/confirmation/ConfirmationModal";
import StatsCard from "./components/stats/StatsCard";

const App = () => {
  const [isBackProjectModalOpen, setIsBackProjectModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleOpenBackProjectModal = () => {
    setIsBackProjectModalOpen(true);
  };

  const handleCloseBackProjectModal = () => {
    setIsBackProjectModalOpen(false);
  };

  const handleContinue = () => {
    setIsBackProjectModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  useEffect(() => {
    if (isBackProjectModalOpen || isConfirmationModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isBackProjectModalOpen, isConfirmationModalOpen]);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="-mt-20 md:-mt-12 px-4 md:px-0">
        <HeroCard onBackProjectClick={handleOpenBackProjectModal} />
      </div>
      <div className="px-4 md:px-0">
        <StatsCard />
        <div className="mb-20">
          <AboutSection />
        </div>
      </div>
      <BackThisProject
        isOpen={isBackProjectModalOpen}
        onClose={handleCloseBackProjectModal}
        onContinue={handleContinue}
      />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
      />
    </main>
  );
};

export default App;
