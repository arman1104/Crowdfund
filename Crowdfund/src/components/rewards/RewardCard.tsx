// const RewardCard = () => {
//   return (
//     <section className="mx-auto mt-6 rounded-xl bg-white px-8 py-10 border border-gray-300">
//       {/* Title row */}
//       <div className="flex items-center justify-between">
//         <h3 className="text-xl font-bold">Bamboo Stand</h3>
//         <span className="text-sm font-medium text-teal-500">
//           Pledge $25 or more
//         </span>
//       </div>

//       {/* Description */}
//       <p className="mt-4 text-base text-gray-500">
// You get an ergonomic stand made of natural bamboo. You've helped us
// launch our promotional campaign, and you'll be added to a special Backer
// member list.
//       </p>

//       {/* Bottom row */}
//       <div className="mt-6 flex items-center justify-between">
//         {/* Left count */}
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold">101</span>
//           <span className="text-sm text-gray-500">left</span>
//         </div>

//         {/* Button */}
//         <button
//           type="button"
//           className="rounded-full bg-teal-500 px-8 py-3 text-sm font-bold text-white"
//         >
//           Select Reward
//         </button>
//       </div>
//     </section>
//   );
// };

// export default RewardCard;

interface RewardCardProps {
  title: string;
  pledge: string;
  description: string;
  left: number;
}

// const RewardCard = ({ title, pledge, description, left }: RewardCardProps) => {
//   return (
//     <section className="mt-6 rounded-xl bg-white px-8 py-10 border border-gray-300">
//       <div className="flex items-center justify-between">
//         <h3 className="text-xl font-bold">{title}</h3>
//         <span className="text-sm font-medium text-teal-500 cursor-pointer">
//           {pledge}
//         </span>
//       </div>

//       <p className="mt-4 text-base text-gray-500">{description}</p>

//       <div className="mt-6 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold">{left}</span>
//           <span className="text-sm text-gray-500">left</span>
//         </div>

//         <button className="rounded-full bg-teal-500 px-8 py-3 text-sm font-bold text-white">
//           Select Reward
//         </button>
//       </div>
//     </section>
//   );
// };

// export default RewardCard;

const RewardCard = ({ title, pledge, description, left }: RewardCardProps) => {
  const isOutOfStock = left === 0;

  return (
    <section
      className={`mt-4 md:mt-6 rounded-xl border px-6 md:px-8 py-8 md:py-10
        ${
          isOutOfStock
            ? "bg-white/60 border-gray-200 opacity-60"
            : "bg-white border-gray-300"
        }`}
    >
      {/* Title row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <span
          className={`text-sm font-medium
    ${isOutOfStock ? "text-teal-300" : "text-teal-500"}`}
        >
          {pledge}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm md:text-base text-gray-500">{description}</p>

      {/* Bottom row */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <span className="text-3xl md:text-2xl font-bold">{left}</span>
          <span className="text-sm text-gray-500">left</span>
        </div>

        <button
          type="button"
          disabled={isOutOfStock}
          className={`w-full sm:w-auto rounded-full px-8 py-3 text-sm text-white font-bold
            ${
              isOutOfStock
                ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-600 transition"
            }`}
        >
          {isOutOfStock ? "Out of Stock" : "Select Reward"}
        </button>
      </div>
    </section>
  );
};

export default RewardCard;
