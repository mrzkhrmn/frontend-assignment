import { GiKnifeFork } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { LiaPillsSolid } from "react-icons/lia";
import { useState } from "react";

export const MembershipSection = () => {
  const [activeCard, setActiveCard] = useState("silver");
  return (
    <div className=" flex flex-col justify-self-center self-center gap-8 absolute -bottom-40 items-center mb-2 left-[28%]">
      <div className="flex items-center gap-8">
        <div
          className={`flex flex-col bg-[#8F8D8D] text-white w-[140px] h-[60px] md:w-[245px] md:h-[124px] ${
            activeCard === "silver" && "scale-110"
          }  px-6 py-2 rounded-3xl shadow-xl font-semibold hover:scale-110 transition-transform duration-200`}
          onClick={() => setActiveCard("silver")}
        >
          <h2 className="text-2xl md:text-3xl">Silver</h2>
          <span className="text-md md:text-2xl">Membership</span>
        </div>
        <div
          className={`flex flex-col bg-[#E0A93F] text-white w-[140px] h-[60px] md:w-[245px] md:h-[124px] ${
            activeCard === "gold" && "scale-110"
          }  px-6 py-2 rounded-3xl shadow-xl font-semibold hover:scale-110 transition-transform duration-200`}
          onClick={() => setActiveCard("gold")}
        >
          <h2 className="text-xl md:text-3xl">Gold</h2>
          <span className="text-md md:text-2xl">Membership</span>
        </div>
        <div
          className={`flex flex-col bg-gradient-to-b from-[#1A93DA] to-[#5962E4] text-white w-[140px] h-[60px] md:w-[245px] md:h-[124px] ${
            activeCard === "diamond" && "scale-110"
          }  px-6 py-2 rounded-3xl shadow-xl font-semibold hover:scale-110 transition-transform duration-200`}
          onClick={() => setActiveCard("diamond")}
        >
          <h2 className="text-xl md:text-3xl">Diamond</h2>
          <span className="text-md md:text-2xl">Membership</span>
        </div>
      </div>
      <div
        className={`mb-10 flex items-center justify-between max-w-4xl mx-auto border-4 rounded-lg border-gray-200 px-4 py-2 gap-10 `}
      >
        <div className="flex items-center gap-2 text-lg">
          <GiKnifeFork
            size={30}
            className={`${
              activeCard === "silver"
                ? "text-gray-400"
                : activeCard === "gold"
                ? "text-[#E0A93F]"
                : "text-[#5962E4]"
            }`}
          />
          <span className="font-semibold">Dining</span>
        </div>
        <div className="h-8 border border-black"></div>
        <div className="flex items-center gap-2 text-lg">
          <FaCamera
            size={30}
            className={`${
              activeCard === "silver"
                ? "text-gray-400"
                : activeCard === "gold"
                ? "text-[#E0A93F]"
                : "text-[#5962E4]"
            }`}
          />
          <span className="font-semibold">Attractions</span>
        </div>
        <div className="h-8 border border-black"></div>
        <div className="flex items-center gap-2 text-lg">
          <IoBagOutline
            size={30}
            className={`${
              activeCard === "silver"
                ? "text-gray-400"
                : activeCard === "gold"
                ? "text-[#E0A93F]"
                : "text-[#5962E4]"
            }`}
          />
          <span className=" font-semibold">Shopping</span>
        </div>
        <div className="h-8 border border-black"></div>
        <div className="flex items-center gap-2 text-lg">
          <LiaPillsSolid
            size={30}
            className={`${
              activeCard === "silver"
                ? "text-gray-400"
                : activeCard === "gold"
                ? "text-[#E0A93F]"
                : "text-[#5962E4]"
            }`}
          />
          <span className="font-semibold">Health</span>
        </div>
      </div>
    </div>
  );
};
