import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

export const RestaurantDetail = () => {
  return (
    <div className="lg:max-w-7xl w-full mx-auto mt-20">
      <div className="lg:w-[675px] w-full lg:px-0 px-4">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-[40px] text-[26px]">The Marmara Taksim</h1>
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
      <div className="w-full overflow-x-auto gap-10 lg:mt-20 mt-8 flex flex-nowrap">
        <div className="whitespace-nowrap flex-[0_0_410px] h-[321px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/8230/cb42/247ed3f5f40ee051701e3c733d05d230?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkBpurksD~oIi2Julpts3MRMDDzf-O7WKgUR2QtPyEXiu7itpZVpZ-UAsgqtQLXBVqRXvRL-vIaf16uU2ya2fyvPZEmQkkVyCQdS0t5vRJJUxZYRu3-itdoMlVaNUWTn~7lcQABVpN~UQxlP6iiNb7nbm2KJlb8wpiVTmu7J-sN15BUCTbkA9V8UWpJF7asgwNH-6QwFdgK0s3c8vsH5cR~omQM9R7UpF~fILnmkZWEI5z4wiuqL9Du-F7nsEer6kUGOt1gFCBB7IzF6U34Al3rmtYs4VHnl6wo1YgnRVa8ZeEBYlbWd54rJLeZ0KwpTG2mD4OuwNM0262HVsZ5GoA__"
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className="whitespace-nowrap flex-[0_0_510px] h-[321px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/8230/cb42/247ed3f5f40ee051701e3c733d05d230?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkBpurksD~oIi2Julpts3MRMDDzf-O7WKgUR2QtPyEXiu7itpZVpZ-UAsgqtQLXBVqRXvRL-vIaf16uU2ya2fyvPZEmQkkVyCQdS0t5vRJJUxZYRu3-itdoMlVaNUWTn~7lcQABVpN~UQxlP6iiNb7nbm2KJlb8wpiVTmu7J-sN15BUCTbkA9V8UWpJF7asgwNH-6QwFdgK0s3c8vsH5cR~omQM9R7UpF~fILnmkZWEI5z4wiuqL9Du-F7nsEer6kUGOt1gFCBB7IzF6U34Al3rmtYs4VHnl6wo1YgnRVa8ZeEBYlbWd54rJLeZ0KwpTG2mD4OuwNM0262HVsZ5GoA__"
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className="whitespace-nowrap flex-[0_0_510px] h-[321px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/be01/4cd3/b330b458ca7ee837f92a27f888401d43?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nv8fvX6gI2-ey~5anu-8f2tjcVWWnDxK~iQakUnHv0T2GrPbxs0eh~Z09L1AzA1-weXZRDidQWqLAO6YeglT2oSWwimM1-bUe75-riSb15bzRFHqXOmHHFColbJyCuG~5WIHVyB8jGPMAYbu~vo97yjpbf4~vlpX4Pq5hf8do4YtJSvFQV31Pk8kc6anblnG0GxEg00L1UWtzda2ZtoZG5A0bCQcelIcmtwiyoa0NxkPPuRKFvd9W~qKI0EKBzKxQLTM9MYNixKJXbWkQGbH8uKT~f9SgyCJ-fogutkf9yzuoKIjPZyBbyfRTyHbf7VtVpLpjgbYxc85lM4F85zHPw__"
            alt=""
            className="object-cover h-full"
          />
        </div>
      </div>
      <div className="lg:w-[935px] w-full justify-between items-center mt-10 lg:px-0 px-4">
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

        <div className="h-[50px] flex items-start gap-2 mt-4">
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
      <div className="mt-10 lg:px-0 px-4">
        <p className="text-[16px] leading-[16px]">
          <b>Coupons Available</b> - Dimond Members
        </p>
        <div className="flex items-center justify-between lg:pl-4 lg:pr-24 px-0 lg:flex-row flex-col">
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
      <div className="mt-10 lg:px-0 px-4">
        <p className="text-[16px] leading-[16px]">
          <b>Coupons Available</b> - Silver Members
        </p>
        <div className="flex items-center justify-between lg:pl-4 lg:pr-24 px-0 lg:flex-row flex-col">
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
