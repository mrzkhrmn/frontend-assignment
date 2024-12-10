import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { Footer } from "../components/Footer";

export const RestaurantDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="w-[675px] h-[125px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[40px]">The Marmara Taksim</h1>
          <div className="flex items-center">
            <div className="border-2 border-gray-300 shadow-xl w-[48px] h-[48px] rounded-full text-center p-1 text-white bg-white">
              <button className="bg-red-500 h-full w-full rounded-full flex items-center justify-center">
                <FaRegHeart size={24} />
              </button>
            </div>
            <div className="border-2 border-gray-300 shadow-xl w-[48px] h-[48px] rounded-full text-center p-1 text-white bg-white">
              <button className="bg-red-500 h-full w-full rounded-full flex items-center justify-center">
                <MdOutlineShare size={24} />
              </button>
            </div>
          </div>
        </div>
        <p className="text-[18px] leading-[24px] mt-12">
          Luxury Taksim hotel rooms and suites with panoramic Bosphorus, Golden
          Horn and Istanbul views.
        </p>
      </div>
      <div className="flex w-full overflow-x-auto  gap-10 mt-20 ">
        <div className=" h-[320px]  whitespace-nowrap flex-[0_0_510px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/8230/cb42/247ed3f5f40ee051701e3c733d05d230?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkBpurksD~oIi2Julpts3MRMDDzf-O7WKgUR2QtPyEXiu7itpZVpZ-UAsgqtQLXBVqRXvRL-vIaf16uU2ya2fyvPZEmQkkVyCQdS0t5vRJJUxZYRu3-itdoMlVaNUWTn~7lcQABVpN~UQxlP6iiNb7nbm2KJlb8wpiVTmu7J-sN15BUCTbkA9V8UWpJF7asgwNH-6QwFdgK0s3c8vsH5cR~omQM9R7UpF~fILnmkZWEI5z4wiuqL9Du-F7nsEer6kUGOt1gFCBB7IzF6U34Al3rmtYs4VHnl6wo1YgnRVa8ZeEBYlbWd54rJLeZ0KwpTG2mD4OuwNM0262HVsZ5GoA__"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="h-[320px] whitespace-nowrap flex-[0_0_510px] ">
          <img
            src="https://s3-alpha-sig.figma.com/img/95e1/09cf/79063a972b99c69497abe99a614aaa5e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drDpf8K6ZFW4HfgLXe~jiJPym1eNdpFA2FZ8IXUjHhpg2XRAkIZYXi8zmVE1LkU0FTNSJQQsZpu0kJJucE99JtCaLLNtAFmsS1zpGcZFdak4Jq00XUd95ARtY5PGQxCx7GIgO5T8bNkg2mjPUnayqJZNg7Pe28j5QXCdZjZt-KTH~BGPcAd48ZX9WGwlx38wnVoXQWRmFLzS5dp83-BZYRgH4EIkQrisAulF8xmCm2pOQpY2DuzQ6o10lcoXEygxyfFUeGBs3TxBoixBOuFtoOwMNktrtmXOBNwsde4F3Is7tVN-2YAue~Uc4IXhuXagbIVySynZ88ss3yjOK2RzgA__ "
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="h-[320px] whitespace-nowrap flex-[0_0_510px] ">
          <img
            src="https://s3-alpha-sig.figma.com/img/be01/4cd3/b330b458ca7ee837f92a27f888401d43?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nv8fvX6gI2-ey~5anu-8f2tjcVWWnDxK~iQakUnHv0T2GrPbxs0eh~Z09L1AzA1-weXZRDidQWqLAO6YeglT2oSWwimM1-bUe75-riSb15bzRFHqXOmHHFColbJyCuG~5WIHVyB8jGPMAYbu~vo97yjpbf4~vlpX4Pq5hf8do4YtJSvFQV31Pk8kc6anblnG0GxEg00L1UWtzda2ZtoZG5A0bCQcelIcmtwiyoa0NxkPPuRKFvd9W~qKI0EKBzKxQLTM9MYNixKJXbWkQGbH8uKT~f9SgyCJ-fogutkf9yzuoKIjPZyBbyfRTyHbf7VtVpLpjgbYxc85lM4F85zHPw__"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="w-[935px] flex justify-between items-center  mt-10">
        <div className="w-[335px] h-[50px] flex items-start gap-2">
          <span className="text-[#00A79D]">
            <FaLocationDot size={24} />
          </span>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/The+Marmara+Taksim/@41.0362673,28.9841898,17z/data=!3m1!4b1!4m8!3m7!1s0x14cab764e83b6691:0x424a7b3906d2a73e!5m2!4m1!1i2!8m2!3d41.0362673!4d28.9863785?coh=164777&entry=tt&shorturl=1"
            className="text-[16px] leading-[24px] underline"
          >
            <b>Address</b>: Gümüşsuyu, Osmanlı Sk. 1/B, 34437 Beyoğlu/İstanbul
          </a>
        </div>

        <div className="h-[50px] flex items-start gap-2">
          <span className="text-[#00A79D]">
            <FaPhoneVolume size={24} />
          </span>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/The+Marmara+Taksim/@41.0362673,28.9841898,17z/data=!3m1!4b1!4m8!3m7!1s0x14cab764e83b6691:0x424a7b3906d2a73e!5m2!4m1!1i2!8m2!3d41.0362673!4d28.9863785?coh=164777&entry=tt&shorturl=1"
            className="text-[16px] leading-[24px] underline"
          >
            <b>Phone</b>: (0212) 334 83 00
          </a>
        </div>
        <div className=" h-[50px] flex items-start gap-2">
          <span className="text-[#00A79D]">
            <TfiWorld size={24} />
          </span>
          <a
            target="_blank"
            href="www.ranna.com.tr"
            className="text-[16px] leading-[24px] underline"
          >
            <b>Web</b>: www.ranna.com.tr
          </a>
        </div>
      </div>
      <div className="mt-10">
        <p className="teext-[16px] leading-[16px]">
          <b>Coupons Available</b> - Dimond Members
        </p>
        <div className="flex items-center justify-between pl-4 pr-24">
          <div className="w-[345px] h-[115px] mt-6 relative">
            <img
              src="/diamondUse.png"
              alt="coupon"
              className="h-full w-full object-cover object-center"
            />
            <button className="w-[52px] h-[27px] bg-transparent absolute bottom-1 right-[13px] rounded-lg"></button>
          </div>
          <div className="w-[345px] h-[115px] mt-6">
            <img
              src="/diamondUsed.png"
              alt="coupon"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="w-[345px] h-[115px] mt-6">
            <img
              src="/diamondUsed2.png"
              alt="coupon"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="teext-[16px] leading-[16px]">
          <b>Coupons Available</b> - Silver Members
        </p>
        <div className="flex items-center justify-between pl-4 pr-24">
          <div className="w-[345px] h-[115px] mt-6 relative">
            <img
              src="/basicUse.png"
              alt="coupon"
              className="h-full w-full object-cover object-center"
            />
            <button className="w-[52px] h-[27px] bg-transparent absolute bottom-1 right-[13px] rounded-lg"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
