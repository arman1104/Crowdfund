// import { Reward } from "../types/reward";

// interface RewardCardProps {
//   reward: Reward;
// }

// const RewardCard = ({ reward }: RewardCardProps) => {
//   const isOutOfStock = reward.left === 0;

//   return (
//     <div
//       className={`border rounded-lg p-6 ${isOutOfStock ? "opacity-50" : ""}`}
//     >
//       <div className="flex justify-between items-center">
//         <h3 className="text-lg font-bold">{reward.title}</h3>
//         <p className="text-teal-600">Pledge ${reward.pledge} or more</p>
//       </div>

//       <p className="my-4 text-gray-600">{reward.description}</p>

//       <div className="flex justify-between items-center">
//         <span className="text-2xl font-bold">
//           {reward.left}
//           <span className="text-sm text-gray-500"> left</span>
//         </span>

//         <button
//           disabled={isOutOfStock}
//           className={`px-6 py-2 rounded-full ${
//             isOutOfStock
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-teal-500 text-white"
//           }`}
//         >
//           {isOutOfStock ? "Out of stock" : "Select Reward"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RewardCard;
