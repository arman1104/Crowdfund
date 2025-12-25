// import RadioCard from "../backthisproject/RadioCard";
// import { radio } from "../../../data/reward";
// const BackThisProject = () => {
//   return (
//     <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white px-12 py-6 shadow-sm">
//       <h1 className="text-xl font-bold">Back this project</h1>
//       <p className="mt-6 text-base text-gray-500 font-normal">
//         Want to support us in bringing Mastercraft Monitor Riser out in the
//         world?
//       </p>
//       {/* <RadioCard /> */}
//       <div className="mt-8">
//         {radio.map((item) => (
//           <RadioCard
//             key={item.id}
//             title={item.title}
//             pledge={item.pledge}
//             description={item.description}
//             left={item.left}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BackThisProject;

import { useState } from "react";
import { radio } from "../../../data/reward";
import RadioCard from "./RadioCard";
import closeModalIcon from "../../../assets/images/icon-close-modal.svg";

const BackThisProject = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="mt-6 mx-auto max-w-3xl rounded-xl bg-white px-12 py-10 relative">
      <div className=" h-4 w-4 absolute top-6 right-6 cursor-pointer text-gray-700">
        <img
          src={closeModalIcon}
          alt="close-modal-icon"
          className="text-gray-700"
        />
      </div>

      <h1 className="text-xl font-bold">Back this project</h1>

      <div className="mt-8">
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
          />
        ))}
      </div>
    </section>
  );
};

export default BackThisProject;
