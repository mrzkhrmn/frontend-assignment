import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoFolderOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="w-full h-[80px] py-4 bg-white relative shadow-lg z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between semicircle z-20 ">
        <Link to={"/"} className="flex">
          <img src={logo} alt="logo" className="w-40" />
        </Link>
        <nav className="bg-[#00A79D] flex items-center text-3xl text-white pl-3 pr-10 py-1 rounded-xl gap-5  relative z-50">
          <Link to={"/"} className="border-b-2  border-white">
            <MdHome />
          </Link>
          <Link>
            <IoFolderOutline size={24} />
          </Link>
          <Link>
            <FaHeart size={24} />
          </Link>
          <Link>
            <GoSearch size={24} />
          </Link>{" "}
          <Link className="p-1 w-14 h-14 absolute left-[12rem] bg-[#00A79D] shadow-xl flex items-center justify-center rounded-full border border-dashed">
            <FaUser />
          </Link>
        </nav>
        <div className="curved absolute left-[50%] bottom-[10%]"></div>
      </div>
    </header>
  );
};
