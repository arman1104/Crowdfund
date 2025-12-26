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

  // Prevent body scroll when any modal is open
  useEffect(() => {
    if (isBackProjectModalOpen || isConfirmationModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBackProjectModalOpen, isConfirmationModalOpen]);

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

  return (
    <main className="bg-gray-100 min-h-screen">
      <HeroSection />
      <div className="-mt-20 px-4 md:px-0">
        <HeroCard onBackProjectClick={handleOpenBackProjectModal} />
      </div>
      <div className="px-4 md:px-0">
        <StatsCard />
        <AboutSection />
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
