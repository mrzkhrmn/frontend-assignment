import { TbShoppingBagPlus } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";
import { useState } from "react";
import { RestraurantCard } from "../components/RestraurantCard";
import { AttractionsCard } from "../components/AttractionsCard";
import { MembershipSection } from "../components/MembershipSection";
import phone from "../assets/phone.svg";
import googlePlay from "../assets/googlePlay.svg";
import appStore from "../assets/appStore.svg";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="h-full w-full -z-1">
      <div className="relative w-full flex items-center justify-center lg:h-[675px] h-[170px] bg-[url('https://s3-alpha-sig.figma.com/img/001f/77b2/886590aa2503bc018c825c6bd18b40aa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvfTK17JI2c~Er-JETJXBVq3gFeiQL1PhXTVTCv7B4HCniwWgjCKKfRP7en4vup80e5Aa9qr6JkQ6nPOqGSZ32HJQLsTxPgreifbdltPSOl08Noro0aSPHNvTHPCbTILA4DMiD1sHhDSb4VIHa-t1XshfzVyUOmSPQE8779rycNw5c2W22p13t05KqC7oyCzVyFPrHHrzm5hC59RxYej3~PsbY2JhQwOtV3iCK0i9NZh0zMjKH9vRDr9WmpdkzvnTrX0oNFPHd6IODk22Lc3LiGwA~QB7JMxOcdBCPDG7BRo-TCRoxylTyBjwg0lJ~8SGhm0tOOrBzSSop2b2lJE4g__')] bg-cover bg-no-repeat bg-bottom ">
        <div className="w-[80rem] flex">
          <div className="text-white font-bold lg:-mt-20 -mt-5 lg:pl-0 pl-4">
            <h1 className="lg:text-[76px] text-[24px] lg:leading-[76px] leading-[24px] whitespace-nowrap">
              Explore Türkiye
            </h1>
            <h2 className="lg:text-[50px] text-[16px] lg:leading-[50px] leading-[16px]">
              & Save in best places!
            </h2>
          </div>
          <button className=" bg-[#00A79D] text-white rounded-l-lg pl-2 pr-4 py-1 lg:text-xl text-sm gap-2 flex items-center absolute right-0">
            <div className="text-[24px] lg:text-[32px]">
              <TbShoppingBagPlus />
            </div>
            <span className="font-bold self-center lg:text-[16px] text-[10px]">
              Buy Now
            </span>
          </button>
        </div>
      </div>
      <div>
        <MembershipSection />
      </div>
      <div className="lg:max-w-7xl mx-auto mb-6 w-full lg:px-0 px-4">
        <div className="flex items-center justify-between  mx-auto mb-6 lg:gap-16 gap-0">
          <h1 className="text-[32px]">Dining</h1>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-[#00A79D] border border-gray-400 py-2 px-1"
          >
            <option value="All">All</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-x-10 lg:gap-y-8 gap-y-3 justify-between">
          <RestraurantCard img={"restoran1.png"} name={"Restaurant 1"} />
          <RestraurantCard img={"restoran2.png"} name={"Restaurant 2"} />
          <RestraurantCard img={"restoran3.png"} name={"Restaurant 3"} />
          <RestraurantCard img={"restoran4.png"} name={"Restaurant 4"} />
          <RestraurantCard img={"restoran5.png"} name={"Restaurant 5"} />
          <RestraurantCard img={"restoran6.png"} name={"Restaurant 6"} />
        </div>
        <div className="flex justify-end my-10">
          <button className="text-xl">See All</button>
        </div>
      </div>
      <div className="lg:h-[500px] h-[400px] w-full">
        <div className="   w-full h-full flex items-center justify-center gap-56 bg-[url('https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8KKdhRWFezOOisH1~Zxo2itEW3Xsbs6GGUOzR4MrfjgpocVr7HSSsDX1gR7WszzAo5X2DkNZ8oF1aN7TtrymZrc8MHdrSnZLcZD7ZS6TWlhtTi~9LFk7TsnMLswTvtURvQ3IaUxurh~hWEUaGxCfczFUSsjDDfIRorEOTiRzXl7g~jNTGnkXSjoB4TSryXCU53kRXiyQkgfNeCa-cge-Zfi7QvfRpwqoGGfVcuMgvmb8bebHkHmFScGB3uDLSoZi2aPzxtsRnfc2H-vHqA1VT38XSyFpnvltYvau3igDgYu7IyExu6sKzM0sXzbHeUZYaxwV7cC0ycCnwDPSQqhBA__')] bg-contain">
          <div className="w-full h-full bg-[#00A79D]/90 flex justify-center gap-32">
            <div className="flex flex-col w-full md:w-[38%] gap-10 px-2 md:px-0 justify-center  h-full">
              <h1 className="lg:text-[32px] text-[26px] text-white font-bold">
                Choose Your Membership & Start Saving
              </h1>
              <p className="text-white lg:text-xl text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="flex items-center gap-6 z-[10]">
                <div className={` w-[175px] lg:h-[115px] h-[70px]`}>
                  <img src="./Premium.png" alt="" />
                </div>
                <div className={` w-[175px] lg:h-[115px] h-[70px]`}>
                  <img src="./Gold.png" alt="" />
                </div>
                <div className={` w-[175px] lg:h-[115px] h-[70px]`}>
                  <img src="./Basic.png" alt="" />
                </div>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/4e3c/263a/de8e75860cceb73325252abafa0fe8c4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kM1a-3PH14w3vCnyZaln12XpEuOg-lzYe11521q1qVQY7Kn97FuaErcqmHnYwKQ2WfqveN0o21W7dTUnDnDh~pMrkNtLW4hiOxjW0~axWvc66xeGJVCcNzTo-xJzVL6hM8EaS8uzQV9uW-6Sbg74FexrME3o9PJpZiFUAG53KOB~Ng~4~6qsCzfkB2N0-L56i5Ir9ow-V9W41e6H5ZZE4lgC4hYffsqRVpQWnFfbbl9VSGyo~2KAmAC5wz2ifTP~TiTHQmwGiD5YAzZQ4l6KmW4yOHonTb-LmS1Kl7tdLYKut1~dOfQGNzE6M8-vlCns9X5Gc~XZj2rCvLoKAnvI7w__"
              alt="imageMember"
              className="h-full lg:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto mb-6 w-full lg:px-0 px-4 mt-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto mb-6">
          <h1 className="text-2xl">Tourist Attractions</h1>
          <button className="text-[#00A79D]">
            <MdFilterList size={35} />
          </button>
        </div>
        <div className="flex flex-wrap gap-x-10 lg:gap-y-8 gap-y-3 justify-between">
          <AttractionsCard name={"Attractions 1"} img={"atractions1.png"} />
          <AttractionsCard name={"Attractions 2"} img={"atraction2.png"} />
          <AttractionsCard name={"Attractions 3"} img={"atraction3.png"} />
          <AttractionsCard name={"Attractions 4"} img={"atraction4.png"} />
          <AttractionsCard name={"Attractions 5"} img={"atraction5.png"} />
          <AttractionsCard name={"Attractions 6"} img={"atraction6.png"} />
        </div>
        <div className="flex justify-end my-10">
          <button className="text-xl">See All</button>
        </div>
      </div>
      <div className="lg:h-[500px] h-[600px] w-full">
        <div className="w-full h-full flex items-center justify-center gap-56 bg-[url('https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8KKdhRWFezOOisH1~Zxo2itEW3Xsbs6GGUOzR4MrfjgpocVr7HSSsDX1gR7WszzAo5X2DkNZ8oF1aN7TtrymZrc8MHdrSnZLcZD7ZS6TWlhtTi~9LFk7TsnMLswTvtURvQ3IaUxurh~hWEUaGxCfczFUSsjDDfIRorEOTiRzXl7g~jNTGnkXSjoB4TSryXCU53kRXiyQkgfNeCa-cge-Zfi7QvfRpwqoGGfVcuMgvmb8bebHkHmFScGB3uDLSoZi2aPzxtsRnfc2H-vHqA1VT38XSyFpnvltYvau3igDgYu7IyExu6sKzM0sXzbHeUZYaxwV7cC0ycCnwDPSQqhBA__')] bg-contain">
          <div className="w-full h-full bg-[#0d56ab]/90 flex justify-center items-center lg:gap-32 gap-8 lg:flex-row flex-col">
            <div className="flex flex-col w-full md:w-[25%] gap-10 px-2 md:px-0 justify-center h-full">
              <h1 className="text-4xl text-white font-bold">
                How Does it Work?
              </h1>
              <p className="text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div>
              <img src="player.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <div className="  w-full h-full flex lg:flex-row flex-col items-center justify-center lg:gap-40 gap-6">
          <img src={phone} alt="phone" />
          <div className="flex flex-col lg:w-[28%] w-full gap-4 lg:px-0 px-4">
            <p className=" text-lg mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="flex items-center gap-10">
              <img
                className="lg:w-[185px] w-[150px]"
                src={googlePlay}
                alt="google"
              />
              <img
                className="lg:w-[185px] w-[150px]"
                src={appStore}
                alt="appStore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
