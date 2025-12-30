import { useState, useEffect } from "react";
import { radio } from "../../../data/reward";
import RadioCard from "./RadioCard";
import closeModalIcon from "../../../assets/images/icon-close-modal.svg";

interface BackThisProjectProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const BackThisProject = ({
  isOpen,
  onClose,
  onContinue,
}: BackThisProjectProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Reset selection when modal opens
  // useEffect(() => {
  //   if (isOpen) {
  //     setSelectedId(null);
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto md:overflow-y-hidden">
        <section
          className="mt-14 mb-8 md:mt-8 mx-auto max-w-3xl w-full rounded-xl bg-white px-6 md:px-10 py-8 md:py-10 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="h-4 w-4 absolute top-6 right-4 md:right-6 cursor-pointer text-gray-700"
            onClick={onClose}
          >
            <img
              src={closeModalIcon}
              alt="close-modal-icon"
              className="text-gray-700"
            />
          </div>

          <h1 className="text-lg md:text-xl font-bold pr-8">
            Back this project
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-500 font-normal">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          <div className="mt-4">
            {radio.map((item) => (
              <RadioCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                pledge={item.pledge}
                left={item.left}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onContinue={onContinue}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BackThisProject;
