import React from "react";
import BookmarkImg from "../../assets/images/icon-bookmark.svg";
import MasterCraftLogo from "../../assets/images/logo-mastercraft.svg";

const HeroCard = () => {
  return (
    <section className="relative mx-auto flex items-center justify-center border max-w-3xl h-full bg-white rounded-xl p-4">
      <div className="mt-8 w-full text-center">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <div className="h-12 w-12">
            <img src={MasterCraftLogo} alt="mastercraft logo" />
          </div>
        </div>

        <h2 className="text-2xl font-bold">
          Mastercraft Bamboo Monitor Riser{" "}
        </h2>
        <p className=" text-base text-gray-500 font-normal mt-2">
          A buitiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-between p-8 mx-4">
          <button
            type="button"
            className="text-sm font-bold py-3 px-8 bg-teal-500 text-white rounded-full"
          >
            Back this project
          </button>
          <button
            type="button"
            className="flex items-center gap-4 rounded-full bg-gray-200 pr-6 hover:bg-gray-300 transition"
          >
            {/* Icon circle */}
            <span className="h-12 w-12">
              <img src={BookmarkImg} alt="bookmark icon" />
            </span>

            {/* Text */}
            <span className="text-sm font-bold text-gray-500">Bookmark</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
