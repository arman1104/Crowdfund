import RewardCard from "../rewards/RewardCard";
import { rewards } from "../../data/reward";

const AboutSection = () => {
  return (
    <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-12 py-10 shadow-sm">
      <h1 className="text-xl font-bold">About this project</h1>
      <p className="mt-6">
        <span className="text-base text-gray-500 font-normal">
          Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
          elevates your screen to a more comfortable viewing height. Placing
          your monitor at eye level has the potential to improve your posture
          and make you more comfortable while at work, helping you stay focused
          on the task at hand.
        </span>
        <br />
        <br />
        <span className="text-base text-gray-500 font-normal">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </span>
      </p>
      {/* <RewardCard /> */}
      <div className="mt-8">
        {rewards.map((reward) => (
          <RewardCard
            key={reward.id}
            title={reward.title}
            pledge={reward.pledge}
            description={reward.description}
            left={reward.left}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

// import RewardCard from "../rewards/RewardCard";
// import { rewards } from "../../types/reward";

// const AboutSection = () => {
//   return (
//     <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-12 py-10 shadow-sm">
//       <h1 className="text-xl font-bold">About this project</h1>

//       <p className="mt-6 text-base text-gray-500">
//         Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform...
//       </p>

//       <div className="mt-8">
//         {rewards.map((reward) => (
//           <RewardCard
//             key={reward.id}
//             title={reward.title}
//             pledge={reward.pledge}
//             description={reward.description}
//             left={reward.left}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
