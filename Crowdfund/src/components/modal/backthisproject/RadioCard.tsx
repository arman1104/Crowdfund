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

interface RadioCardProps {
  id: number;
  title: string;
  description: string;
  pledge?: string;
  left?: number;
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const RadioCard = ({
  id,
  title,
  description,
  pledge,
  left,
  selectedId,
  onSelect,
}: RadioCardProps) => {
  const isSelected = selectedId === id;
  const isOutOfStock = left === 0;

  return (
    <label
      className={`mt-6 block cursor-pointer rounded-xl border p-6 shadow-sm
        ${
          isSelected
            ? "border-teal-500 ring-1 ring-teal-500 shadow-sm"
            : "border-gray-300 shadow-sm"
        }
        ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {/* Hidden radio input */}
      <input
        type="radio"
        name="reward"
        checked={isSelected}
        disabled={isOutOfStock}
        onChange={() => onSelect(id)}
        className="sr-only"
      />

      <div className="flex gap-6">
        {/* Custom radio circle */}
        <div
          className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center
            ${isSelected ? "border-teal-500" : "border-gray-300"}`}
        >
          {isSelected && (
            <div className="h-2.5 w-2.5 rounded-full bg-teal-500" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-base font-bold">{title}</h3>

              {pledge && (
                <span className="text-sm font-medium text-teal-500">
                  {pledge}
                </span>
              )}
            </div>

            {typeof left === "number" && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{left}</span>
                <span className="text-sm text-gray-500">left</span>
              </div>
            )}
          </div>

          <p className="mt-4 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </label>
  );
};

export default RadioCard;
