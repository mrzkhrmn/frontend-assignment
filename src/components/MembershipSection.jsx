import { GiKnifeFork } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { LiaPillsSolid } from "react-icons/lia";
import { useState } from "react";

export const MembershipSection = () => {
  const [activeCard, setActiveCard] = useState("silver");
  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:-mt-[100px] -mt-8 z-40 relative">
      <div className="flex items-center lg:gap-8 gap-3 lg:ml-0 ml-6">
        <div
          className={`flex flex-col bg-[#8F8D8D] text-white lg:w-[245px] flex-shrink-0 w-[108px] lg:h-[124px] h-[60px] ${
            activeCard === "silver" && "scale-110"
          }  px-3 lg:px-6 py-2 rounded-xl shadow-xl font-semibold hover:scale-110 transition-transform duration-200`}
          onClick={() => setActiveCard("silver")}
        >
          <h2 className="lg:text-3xl text-lg">Silver</h2>
          <span className="lg:text-2xl text-[13px]">Membership</span>
        </div>
        <div
          className={`flex flex-col bg-[#E0A93F] text-white lg:w-[245px] flex-shrink-0 w-[108px] lg:h-[124px] h-[60px] ${
            activeCard === "gold" && "scale-110"
          }  px-3 lg:px-6 py-2 rounded-xl shadow-xl font-semibold hover:scale-110 transition-transform duration-200`}
          onClick={() => setActiveCard("gold")}
        >
          <h2 className="lg:text-3xl text-lg">Gold</h2>
          <span className="lg:text-2xl text-[13px]">Membership</span>
        </div>
        <div
          className={`flex flex-col bg-gradient-to-b from-[#1A93DA] to-[#5962E4] text-white flex-shrink-0 lg:w-[245px] w-[108px] lg:h-[124px] h-[60px] ${
            activeCard === "diamond" && "scale-110"
          }  px-3 lg:px-6 py-2 rounded-xl shadow-xl font-semibold hover:scale-110 transition-transform duration-200`}
          onClick={() => setActiveCard("diamond")}
        >
          <h2 className="lg:text-3xl text-lg">Diamond</h2>
          <span className="lg:text-2xl text-[13px]">Membership</span>
        </div>
      </div>
      <div
        className={`mb-10 flex items-center justify-between lg:w-[1000px] w-[370px] lg:mx-0 ml-2 border-2 rounded-lg border-gray-200 px-4 py-2 lg:gap-10 gap-4 lg:mt-0 mt-6 lg:overflow-visible overflow-x-auto`}
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
          <span className="font-semibold lg:text-[20px] text-[12px]">Dining</span>
        </div>
        <div className="h-8 border border-gray"></div>
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
          <span className="font-semibold lg:text-[20px] text-[12px]">Attractions</span>
        </div>
        <div className="h-8 border border-gray"></div>
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
          <span className=" font-semibold lg:text-[20px] text-[12px]">Shopping</span>
        </div>
        <div className="h-8 border border-gray"></div>
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
          <span className="font-semibold lg:text-[20px] text-[12px]">Health</span>
        </div>
      </div>
    </div>
  );
};
