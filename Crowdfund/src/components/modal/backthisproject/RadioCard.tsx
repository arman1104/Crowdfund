// interface RadioCardProps {
//   title: string;
//   description: string;
//   pledge?: string;
//   left?: number;
// }

// const RadioCard = ({ title, pledge, description, left }: RadioCardProps) => {
//   const isOutOfStock = left === 0;

//   return (
//     <section
//       className={`mt-6 rounded-xl border p-6
//         ${isOutOfStock ? "opacity-50" : "bg-white"}
//       `}
//     >
//       <div className="flex gap-6">
//         {/* Radio circle */}
//         <div className="mt-1 h-5 w-5 rounded-full border-2 border-gray-300" />

//         {/* Content */}
//         <div className="flex-1">
//           {/* Title row */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <h3 className="text-base font-bold">{title}</h3>

//               {pledge && (
//                 <span
//                   className={`text-sm font-medium ${
//                     isOutOfStock ? "text-teal-300" : "text-teal-500"
//                   }`}
//                 >
//                   {pledge}
//                 </span>
//               )}
//             </div>

//             {typeof left === "number" && (
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-bold">{left}</span>
//                 <span className="text-sm text-gray-500">left</span>
//               </div>
//             )}
//           </div>

//           {/* Description */}
//           <p className="mt-4 text-sm text-gray-500">{description}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RadioCard;

import { useState, useEffect } from "react";

interface RadioCardProps {
  id: number;
  title: string;
  description: string;
  pledge?: string;
  left?: number;
  selectedId: number | null;
  onSelect: (id: number) => void;
  onContinue: () => void;
}

const RadioCard = ({
  id,
  title,
  description,
  pledge,
  left,
  selectedId,
  onSelect,
  onContinue,
}: RadioCardProps) => {
  const isSelected = selectedId === id;
  const isOutOfStock = left === 0;

  // Extract minimum pledge amount from pledge string (e.g., "Pledge $25 or more" -> 25)
  const getMinPledge = (pledgeStr?: string): number => {
    if (!pledgeStr) return 0;
    const match = pledgeStr.match(/\$(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const [pledgeAmount, setPledgeAmount] = useState<string>(
    getMinPledge(pledge).toString()
  );

  // Update pledge amount when selection changes
  useEffect(() => {
    if (isSelected) {
      setPledgeAmount(getMinPledge(pledge).toString());
    }
  }, [isSelected, pledge]);

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation();
    onContinue();
  };

  const handlePledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    setPledgeAmount(value);
  };

  const minPledge = getMinPledge(pledge);
  const currentPledge = parseInt(pledgeAmount, 10) || 0;
  const isValidPledge = minPledge === 0 || currentPledge >= minPledge;

  return (
    <div
      className={`mt-4 block rounded-xl border p-4 md:p-6 shadow-sm
        ${
          isSelected
            ? "border-teal-500 ring-1 ring-teal-500 shadow-sm"
            : "border-gray-300 shadow-sm"
        }
        ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <label
        className={`flex gap-4 md:gap-6 cursor-pointer ${
          isOutOfStock ? "cursor-not-allowed" : ""
        }`}
      >
        {/* Hidden radio input */}
        <input
          type="radio"
          name="reward"
          checked={isSelected}
          disabled={isOutOfStock}
          onChange={() => !isOutOfStock && onSelect(id)}
          className="sr-only"
        />

        {/* Custom radio circle */}
        <div
          className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
            ${isSelected ? "border-teal-500" : "border-gray-300"}`}
        >
          {isSelected && (
            <div className="h-2.5 w-2.5 rounded-full bg-teal-500" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h3 className="text-sm md:text-base font-bold">{title}</h3>

              {pledge && (
                <span className="text-xs md:text-sm font-medium text-teal-500">
                  {pledge}
                </span>
              )}
            </div>

            {typeof left === "number" && (
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-bold">{left}</span>
                <span className="text-xs md:text-sm text-gray-500">left</span>
              </div>
            )}
          </div>

          <p className="mt-3 md:mt-2 text-xs md:text-sm text-gray-500">{description}</p>

          {/* Pledge input and Continue button - shown when selected */}
          {isSelected && (
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-500 font-medium text-center sm:text-left">
                  Enter your pledge
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      $
                    </span>
                    <input
                      type="text"
                      value={pledgeAmount}
                      onChange={handlePledgeChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-teal-500"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={!isValidPledge}
                    className={`w-full sm:w-auto px-8 py-3 rounded-full text-sm font-bold text-white transition ${
                      isValidPledge
                        ? "bg-teal-500 hover:bg-teal-600"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default RadioCard;
