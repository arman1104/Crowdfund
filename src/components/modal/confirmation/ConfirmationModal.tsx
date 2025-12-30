// import { useEffect } from "react";
import iconCheck from "../../../assets/images/icon-check.svg";
import closeModalIcon from "../../../assets/images/icon-close-modal.svg";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal = ({ isOpen, onClose }: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        <section
          className="relative mx-auto max-w-md w-full rounded-xl bg-white px-6 md:px-8 py-8 md:py-10 text-center shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div
            className="absolute top-6 right-4 md:right-6 h-4 w-4 cursor-pointer"
            onClick={onClose}
          >
            <img
              src={closeModalIcon}
              alt="close-modal-icon"
              className="text-gray-700"
            />
          </div>

          {/* Check icon */}
          <div className="mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-teal-500">
            <img src={iconCheck} alt="check icon" />
          </div>

          {/* Title */}
          <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold pr-8">
            Thanks for your support!
          </h2>

          {/* Description */}
          <p className="mb-6 md:mb-8 text-sm text-gray-500 px-2">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>

          {/* Got it button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-teal-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-teal-600"
          >
            Got it!
          </button>
        </section>
      </div>
    </>
  );
};

export default ConfirmationModal;
