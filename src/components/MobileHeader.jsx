import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FaHeart, FaCheck } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoFolderOutline } from "react-icons/io5";
import { useState } from "react";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full h-[80px] fixed lg:hidden bottom-0 py-4 bg-[#00A79D] mt-auto shadow-lg z-[999]">
      <button
        className="absolute right-5  -top-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src="menuButton.png" alt="button" />
      </button>
      <nav className="bg-[#00A79D] flex items-center justify-between text-3xl text-white  rounded-xl  relative  px-[4rem]">
        <Link to={"/"} className="border-b-2  border-white">
          <MdHome size={45} />
        </Link>
        <Link>
          <IoFolderOutline size={40} />
        </Link>
        <Link>
          <FaHeart size={40} />
        </Link>
        <Link>
          <GoSearch size={40} />
        </Link>{" "}
      </nav>
      <div
        className={`${
          isMenuOpen ? "h-[480px]" : "h-0 hidden"
        } -top-[25rem] w-full bg-[#00A79D] absolute text-white p-6 rounded-t-3xl`}
      >
        <div className="flex items-center justify-between pl-3 py-2">
          <h2 className="text-xl font-bold">Category Selection</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-[#00A79D]"
          >
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex flex-wrap gap-4 py-6  pl-3">
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Dining <FaCheck />
          </button>
          <button className="bg-[#00A79D] text-white shadow-xl border border-black/20 text-lg px-4 rounded-md">
            Attractions
          </button>
          <button className="bg-[#00A79D] text-white shadow-xl border border-black/20 text-lg px-4 rounded-md">
            Shopping
          </button>
          <button className="bg-[#00A79D] text-white shadow-xl border border-black/20 text-lg px-4 rounded-md">
            Health
          </button>
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Restaurants <FaCheck />
          </button>
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Cafes <FaCheck />
          </button>
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Clubs <FaCheck />
          </button>
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Pastries <FaCheck />
          </button>
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Bars <FaCheck />
          </button>
          <button className="bg-white text-[#00A79D] text-lg px-4 rounded-md flex items-center gap-1">
            Other <FaCheck />
          </button>
        </div>
        <h2 className="text-xl font-bold pl-3 py-2">City Selection</h2>
        <div className="w-full border border-white"></div>
        <div className="py-4 pl-3 flex items-center gap-20">
          <select
            name="city"
            id="city"
            className="text-[#00A79D] rounded-md text-xl px-3 py-2 w-[40%]"
          >
            <option value="istanbul">Istanbul</option>
          </select>
          <div className="flex  items-center text-lg leading-4 gap-4">
            <input type="checkbox" className="w-5 h-5" />{" "}
            <label htmlFor="sort" className=" whitespace-wrap">
              Sort by
              <br /> closest
            </label>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-8">
          <button className="text-xl font-bold bg-white text-[#00A79D] py-2 px-32 rounded-xl">
            Apply
          </button>
        </div>
      </div>
    </header>
  );
};
