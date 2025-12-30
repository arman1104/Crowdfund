import { useState } from "react";
// import BookmarkImg from "../../assets/images/icon-bookmark.svg";
import MasterCraftLogo from "../../assets/images/logo-mastercraft.svg";
import { Bookmark } from "lucide-react";

interface HeroCardProps {
  onBackProjectClick: () => void;
}

const HeroCard = ({ onBackProjectClick }: HeroCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <section className="relative mx-auto flex items-center justify-center border max-w-3xl h-full bg-white rounded-xl p-6 md:p-4 shadow-sm">
      <div className="mt-8 w-full text-center">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <div className="h-12 w-12">
            <img src={MasterCraftLogo} alt="mastercraft logo" />
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold px-2">
          Mastercraft Bamboo Monitor Riser{" "}
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-normal mt-2 px-4">
          A buitiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex sm:flex-row gap-4 sm:justify-between sm:gap-0 p-6 md:p-8 mx-0 md:mx-4">
          <button
            type="button"
            onClick={onBackProjectClick}
            className="w-full sm:w-auto text-sm font-bold py-3 px-8 bg-teal-600 text-white rounded-full"
          >
            Back this project
          </button>
          <button
            type="button"
            onClick={() => setIsBookmarked((prev) => !prev)}
            className="
    flex items-center justify-center gap-1
    h-12 w-12
    rounded-full
    bg-gray-200
    hover:bg-gray-300
    transition
    sm:h-auto sm:w-auto sm:rounded-full sm:pr-6 
  "
          >
            {/* Icon */}

            <div className="h-12 w-12 flex items-center justify-center ">
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-full transition
                  ${isBookmarked ? "bg-teal-600" : "bg-black"}
                  `}
              >
                {/* <Bookmark className="fill-white border" /> */}

                <Bookmark
                  className={`h-5 w-5 ${
                    isBookmarked ? "text-white" : "text-gray-400"
                  }`}
                  fill={isBookmarked ? "currentColor" : "currentColor"}
                />
              </div>
            </div>

            {/* Text – desktop only */}

            <span
              className={`hidden sm:inline text-sm font-bold ${
                isBookmarked ? "text-teal-600" : "text-gray-400"
              }`}
            >
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
