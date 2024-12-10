import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" border-t border-gray-400  lg:pb-0 py-10 sm:pb-[7rem] mt-4">
      <div className="lg:max-w-7xl w-full mx-auto flex justify-between lg:flex-row flex-col">
        <div className="lg:w-[70%] w-full flex-col">
          <div className="flex items-center lg:gap-10 gap-4 mb-4 lg:flex-row flex-col">
            <Link>About Us</Link>
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <Link>Contact</Link>
          </div>
          <p className="text-md lg:px-0 px-4">
            Copyright 2022. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis.
          </p>
        </div>
        <div className="flex items-center lg:justify-start justify-center text-2xl gap-4 text-white lg:px-0 px-4 lg:mt-0 mt-4">
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <CiInstagram />
          </a>
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <FaYoutube />
          </a>
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <FaTwitter />
          </a>
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};
