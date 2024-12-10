import { TbShoppingBagPlus } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";
import { useState } from "react";
import { RestraurantCard } from "../components/RestraurantCard";
import { AttractionsCard } from "../components/AttractionsCard";
import { MembershipSection } from "../components/MembershipSection";
import timelinebar from "../assets/timelinebar.svg";
import startbutton from "../assets/startbutton.svg";
import airplay from "../assets/airplay.svg";
import bigStartButton from "../assets/bigstartbutton.svg";
import phone from "../assets/phone.svg";
import googlePlay from "../assets/googlePlay.svg";
import appStore from "../assets/appStore.svg";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="h-full w-full -z-1">
      <div className="relative w-full flex flex-col h-[675px] bg-[url('https://s3-alpha-sig.figma.com/img/001f/77b2/886590aa2503bc018c825c6bd18b40aa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvfTK17JI2c~Er-JETJXBVq3gFeiQL1PhXTVTCv7B4HCniwWgjCKKfRP7en4vup80e5Aa9qr6JkQ6nPOqGSZ32HJQLsTxPgreifbdltPSOl08Noro0aSPHNvTHPCbTILA4DMiD1sHhDSb4VIHa-t1XshfzVyUOmSPQE8779rycNw5c2W22p13t05KqC7oyCzVyFPrHHrzm5hC59RxYej3~PsbY2JhQwOtV3iCK0i9NZh0zMjKH9vRDr9WmpdkzvnTrX0oNFPHd6IODk22Lc3LiGwA~QB7JMxOcdBCPDG7BRo-TCRoxylTyBjwg0lJ~8SGhm0tOOrBzSSop2b2lJE4g__')] bg-cover bg-no-repeat bg-bottom ">
        <h1 className="text-white font-bold absolute top-[50%] md:top-[40%] left-[10%] w-[580px] flex flex-col gap-1">
          <span className="text-[76px] leading-[76px]">Explore Türkiye </span>
          <span className="text-[50px]  leading-[50px]">
            & Save in best places!
          </span>
        </h1>
        <div className="w-full h-full flex items-center justify-end">
          <button className=" bg-[#00A79D] text-white rounded-l-lg pl-2 pr-4 py-1 text-xl gap-2 flex items-center">
            <TbShoppingBagPlus size={32} />
            <span className="font-bold self-center">Buy Now</span>
          </button>
        </div>
        <div className=" border border-black">
          <MembershipSection />
        </div>
      </div>
      <div className=" max-w-6xl mx-auto mb-6 mt-40">
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6">
          <h1 className="text-[32px]">Dining</h1>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-[#00A79D] border border-gray-400 py-2 px-1"
          >
            <option value="All">All</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          <RestraurantCard
            img={
              "https://s3-alpha-sig.figma.com/img/09f3/9372/9e7b5a783fdd0114a5f20fc0456b4686?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SHL0HQhZaZsGzRKrgikhW2AmAacqHep8ZtjOaNQlXEzXX8SGEkdOUH4i9wWud1aekRI3Tf5MAvdSUmyyvv4q6nWiO2LjGlXqfB1WFgdJCi-fDbroh8JqwPdJr7GGCVbtfU~3gQxwoFeD6AkRVUaZRMKn8Hbyf3IoTc49wGAgT1dJ4Q1WKI6UYUvs8ldZ9LsOgLuVD8dPh-zJ~LPHJsOphHRPLns2z2RGzaqzIrpjpQFzijMmWPI7J4UdN-fCf5uBAnpGsPJfL6PWXHYmTzWe-VK8ipjNbfUOoq9bRKKLBRVSe4wi5CT53~HnEibjluUWYUQtxARdNHILlS20INLz1A__"
            }
            name={"Restaurant 1"}
          />
          <RestraurantCard
            img={
              "https://s3-alpha-sig.figma.com/img/9fba/2db8/63b51e669309ac5b12d2a849823ef141?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EX6Y47lzFbnzllfulxJITtBR9FmUzACZYSIYKdbkcJ8mYxiHY8tLj5Zns2~-zGP5Yu38CSp6HmxZsBQhPRsqDBt7Rp0CbCu36lVV6zebrPNCtzC~91LJ6RTxNzoI7r3dG4zODFQEAXkgoYgZYX9enC3xF-skm-y9cS0o3d9sjcK-SEgDT4Pg4wBeucY-9aYNceUyASHpjPDmfIrZXhmM2-XacZacBH5-1LmzX7IxqdEz1SFCMO2756TCamKvP2elEXAhmWiBPrNLykWjnRnud5UULGZzLtmUtO8UBCxqBSqlyjJKf-DX1hclBa691RQ66RqSgp8a7wFB39wSdxk62Q__"
            }
            name={"Restaurant 2"}
          />
          <RestraurantCard
            img={
              "https://s3-alpha-sig.figma.com/img/1251/6afb/3d1efc6060c94c284652babaf4a01319?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myBr2eu8niiXz5T6P1hwvwfXaK8s7wo1uz6Mobl6a6x53qFLzir~5-dhaaxagvshDMAjeHsP3tUtCFh7LKTViGzGYphcLG7FZaS-UVsvJLF0QbV~zceKgrfs9HWBEsfLMItowrrFvqK6KKjN6P4TrlPMeUskdCDEW8J1qlcEoNk1Lt69lLva~rFEzEkjq3OtgdQ6BLmX9gTjSh6y0Uvk~fY~wdJCnv~tFM~uK0BCCn3FFU~Ply-yCdwP34YlUJUfLTFQU2E17utTjZmtgTvmeVq1Ua2uuX8r2ntwE5EVDrxXWxVmxjN1tOfTpnfDOFzrVbU9oUqVxSJzD-9YIiwJXw__"
            }
            name={"Restaurant 3"}
          />
          <RestraurantCard
            img={
              "https://s3-alpha-sig.figma.com/img/0d0e/d700/049ba2897f220b9ee3ef7ab80c720f43?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9Zaf8mBFRc5QfaAvcNRvjsE~cEegM1MepziNGWsBBJaH5lm5fmDDPxjKTraCAXbhDywSCPKtqNAGBOB-wIviR900Z3WTRtwqWjq8ydhSEYjC-6W8WRXWkEK9ZDwUnc2brIfI1EHtUGgXvW2J~jMJN2IQh~CW5Weee2Ifa~L8OCq7R0mftcKZL7sipyH6f2OTQn4AgK1FF2B4T9gx7spK~mLqMnbP2tFfKH4QL1I88MCYiXjUJ7XU1DWXxUBeE8aPW1lRVPz7VznJRspIFH2xcO3nSyBcwlwKFSKFFct6PqDFp8GN-~9IgRW4l9qeWLukMviqW2pkO~IrNF8Ckd~Zw__"
            }
            name={"Restaurant 4"}
          />
          <RestraurantCard
            img={
              "https://s3-alpha-sig.figma.com/img/d6aa/757d/4a3658ed49f5491bc805c5965c5cc38d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bCbS-6scptfsc5qWikJQwQyYrziIw7E~smOxBMTZR1ArnQLk6LBOSfssS6ARVaXyQYkr-bQayGT4QrzQ8ElHcddZTOtoJXYCrp2lpmclqAnMiQbs265gBYKTVUwDd1jwDYEBvTfIRsTISPgOLqWbASjgcKad-Kvu9AxaCzSdx71JNEWlDmI7oA4ECoeyWH4Fk~iKRngBAm~tSxTYFB6zQdetADZWnkmn5~~Ak93qgpjQXn8v8fCDyynMJg8pt8UhNUbloF6DVeJ5CX0oUXaRcrIw7Qgv2-CLjPQyHPDO-h3wmaEJ9bYPGrNT7Y4693eU6E9OclpytEDuHJBYNWqtGA__"
            }
            name={"Restaurant 5"}
          />
          <RestraurantCard
            img={
              "https://s3-alpha-sig.figma.com/img/1a8e/ea7e/1e0b962ad0beef7dda14e91dc46877f7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dky8XBcs2Uavfso6Frw8aKyVsHI5zN4FTJq6-0j72G265~cFa3Bjbly~ODD0RzcrwL0KvNviDsDaL4BXMAgmsWFMDRD33MKZhQunChXMYIcnL3nVGNOxMZtEBPsNgkbQSseG7RpE5inLzG1W2APVcp~mZO~k8CJPvt~~xg1CZLRIixMeTzjjKLieIubf7sFCn6rXhK5SvwRZb4~W56gcEjj6vTjuTM8EmumJs7~N76taf1DhbcsmJjSvTJQL0MicgUEKIfP4oUTRSeC5UJD-tc~zqQlAHSzFzWOJEL7-0pi150gyMCDkRMqX9B0NlHWae2m~Sh8X0lusSZB-wcI-hg__"
            }
            name={"Restaurant 6"}
          />
        </div>
        <div className="flex justify-end my-10 mr-16">
          <button className="text-xl">See All</button>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <div className="   w-full h-full flex items-center justify-center gap-56 bg-[url('https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8KKdhRWFezOOisH1~Zxo2itEW3Xsbs6GGUOzR4MrfjgpocVr7HSSsDX1gR7WszzAo5X2DkNZ8oF1aN7TtrymZrc8MHdrSnZLcZD7ZS6TWlhtTi~9LFk7TsnMLswTvtURvQ3IaUxurh~hWEUaGxCfczFUSsjDDfIRorEOTiRzXl7g~jNTGnkXSjoB4TSryXCU53kRXiyQkgfNeCa-cge-Zfi7QvfRpwqoGGfVcuMgvmb8bebHkHmFScGB3uDLSoZi2aPzxtsRnfc2H-vHqA1VT38XSyFpnvltYvau3igDgYu7IyExu6sKzM0sXzbHeUZYaxwV7cC0ycCnwDPSQqhBA__')] bg-contain">
          <div className="w-full h-full bg-[#00A79D]/90 flex justify-center gap-32">
            <div className="flex flex-col w-full md:w-[38%] gap-10 px-2 md:px-0 justify-center  h-full">
              <h1 className="text-4xl text-white font-bold">
                Choose Your Membership & Start Saving
              </h1>
              <p className="text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="flex items-center gap-6 z-[10]">
                <div className={` w-[175px] h-[115px]`}>
                  <img src="./Premium.png" alt="" />
                </div>
                <div className={` w-[175px] h-[115px]`}>
                  <img src="./Gold.png" alt="" />
                </div>
                <div className={` w-[175px] h-[115px]`}>
                  <img src="./Basic.png" alt="" />
                </div>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/4e3c/263a/de8e75860cceb73325252abafa0fe8c4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kM1a-3PH14w3vCnyZaln12XpEuOg-lzYe11521q1qVQY7Kn97FuaErcqmHnYwKQ2WfqveN0o21W7dTUnDnDh~pMrkNtLW4hiOxjW0~axWvc66xeGJVCcNzTo-xJzVL6hM8EaS8uzQV9uW-6Sbg74FexrME3o9PJpZiFUAG53KOB~Ng~4~6qsCzfkB2N0-L56i5Ir9ow-V9W41e6H5ZZE4lgC4hYffsqRVpQWnFfbbl9VSGyo~2KAmAC5wz2ifTP~TiTHQmwGiD5YAzZQ4l6KmW4yOHonTb-LmS1Kl7tdLYKut1~dOfQGNzE6M8-vlCns9X5Gc~XZj2rCvLoKAnvI7w__"
              alt="imageMember"
              className="h-full"
            />
          </div>
        </div>
      </div>
      <div className=" max-w-6xl mx-auto my-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6">
          <h1 className="text-2xl">Tourist Attractions</h1>
          <button className="text-[#00A79D]">
            <MdFilterList size={35} />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          <AttractionsCard
            name={"Attractions 1"}
            img={
              "https://s3-alpha-sig.figma.com/img/3db9/0582/874220ab4a0a337a74cca3dd6ffe214d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~piTTOlPbl9zhM5l6mjJMA-PBPKHaU2j--w3xL2nj-GXlOQqgWeQeYvYBVo-N4-lB3uDGJEA1JRTWP2WBhg3BY6LH76Y37SB2gCUUX7ZdhgKPoVV8gZCUW8lyza9w6MMXQdXC9CqH3GZW7ZaqgOVG0TIXv~gKHX5EsQ2w5aW6iQiah4OnRFUE6uq5IFOdS2PUPn2HUNNh67BShJGTB13OEBNBt5rSk9zbt0FeqnBEORV4x1qgm8KSZXF1Mzf5f7LsfCEcdExbc~DJKNjMQVeUDIl1pydETLY4jCRnad3RJ4Z4t0R9M~-pfk1BQe3VO9TsKI6zl63fQ-XI3EQQhqlA__"
            }
          />
          <AttractionsCard
            name={"Attractions 2"}
            img={
              "https://s3-alpha-sig.figma.com/img/d217/bd01/e607d1b06eba0d052b1ede9b1bee5451?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h98SopEfG9pPbiaReaajMWa4UISxvDo9hzlM3JbhdfEJ1Y0vKQSxZDq-A6sbkfkvbFfc9vWmaBi5PoSfbUCGZo5yS5SMzHCqtR4gsjk36XRr2RZACl7tRvaveWMpAIShbJOOAuj5-3te~HL4orq035XNfOLgvUhN2qLDEjZUsY5OFUaEg9XyiU3f-epgAbKIoRjG6bnpITlF6j9LE7r4rdoZkZPKNKo75ZFbnmeftW5XFz-28LOqP0~wTHk6GN3tbkkSUyKEWCdMo-DXRX7qEWTM7kSSS8SJ1ndI6arM0TyFTA9gPwGrV4oDKdECg2IS-We~4xvdKXvyyKDgmmxrxQ__"
            }
          />
          <AttractionsCard
            name={"Attractions 3"}
            img={
              "https://s3-alpha-sig.figma.com/img/6c2a/a00f/9398995ebf821a8997a5659208ff0d59?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oB7NutEWyW-GTJE0o5~roCMnReln17oS5JkCZg5dS6~ujXCDUT-JeQByq1MjFGxGelMQjGZlplS0pvNJIqYvTfI0OO7TmPmZXi8KYnzOF3KXimaw7RaYB0BTujQ69Wew9zgdEhV9tn50ePPZgT9Kkc3C1kdQbpxVII1A32T-SEj4E~YW57RjY2l4zPSaC3DULNLprwaSZ7TRNzjIg5zQxSgpKelCVip81pK0yIBHyo1ViHRdRIF0j0JIfU8vt8yoxevsT93URXz2AxyGiigXAMTrQ9suSv9qbs4yQux9V~KBjZlBmwPhu4c4ZtWtU9XaGQDVFvWX0k~1UZmNTk0oWQ__"
            }
          />
          <AttractionsCard
            name={"Attractions 4"}
            img={
              "https://s3-alpha-sig.figma.com/img/33d4/853f/67ce11ddb1d043ad5c16fb61eb9f9a00?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gF~UgzYB6-gNxortrbP3t3eOEpEilQQHJAPAaSMbdU8KYDF7yXrh-K5TV9Qz8noM2QokFaGxsGIVNUQ9mnVLQchjxeVRlgVThhBXfg8364sX-RdSZVHb8RLoRTftkcy0MWN0NtPqeDVhd~Noq0QA6a8iQVDxjVuvsNmFQjH6s-gzH~0m5tKnbp5ZmOjSAnbP8nUgQ7WiG7bEGqH8yoVDAbxkquPVXZNZy98bEGdOppx3TkRWLKsjGxTAZjUi~vkqU0iUgCnpBG22rHsts0LjkhSqHZAkZRZn4msaBgUip4lX0osTjh7J428kIXlswyWaSsdIYI4G-BgxkmX4QjxAOw__"
            }
          />
          <AttractionsCard
            name={"Attractions 5"}
            img={
              "https://s3-alpha-sig.figma.com/img/83df/d3d0/100d7785bcb4ecf2463a7d2fddf8ea62?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mV~a-w4yQJuXJvIM2-XF1OCR3y0FqEnzUWgKcBUlySC7SUUKH7xJnaXRdNxreFTr1BuE5oNdY8DcxOuE5ZAGRB6rMh~LR2-cqXgwVPHbwMfHqnNa0BwaAGZdR5KkamNanVsBvxQJIn3yiQis20adpuO~ekqqGeoO3OE4I8U2JiZN93IQpWlUUpzsVjaYnQLMjBLYoGwRrHBVwmJbyOCLz9gRAOpi9VcSwlRsqYKlAWsonlcQpOB9Sqs56Oene-NwJA0sNPCPY4jB4XE4zP9vSyacS3-HzDcChVblCqx4T0fNOJCBUjS7G26SutBDZrzPTr2gCNEZxCDOPnLeb~uAFA__"
            }
          />
          <AttractionsCard
            name={"Attractions 6"}
            img={
              "https://s3-alpha-sig.figma.com/img/8743/a1b1/166b6e65d7c77d537c8c99011e9227fe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNuYrKA4E2psVNCg6HLdbKwk8JJTCNj4PQO0LPnvNt6401nnPlYtvK2nwfARe~1xZk4AFOSbkOHLLJpHkrElrQcqM~WoJ0UxeACz5qfrzgw2~bTDKL9D4yKv2JUdAkOOYTjMfXRCGjKRPq-3mVT6pHmgjI-sHIUooZxL3vvYc0GFBT639eWdmRwuiCjcv20BVdv5yuN7lqtrjlTYs92I5HOXckC50fxYlioJ1dG13Z6tumSm9JrUKzqAVXZkK5U65qtjXaRaBmB1wuDAA9GPCKcofShr0aFPEmdXw7ymJT25CAqwa~JU6QxVVNYrOGW51p-waNpB6zYbnAAGpJHgmw__"
            }
          />
        </div>
        <div className="flex justify-end my-10 mr-16">
          <button className="text-xl">See All</button>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <div className="   w-full h-full flex items-center justify-center gap-56 bg-[url('https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8KKdhRWFezOOisH1~Zxo2itEW3Xsbs6GGUOzR4MrfjgpocVr7HSSsDX1gR7WszzAo5X2DkNZ8oF1aN7TtrymZrc8MHdrSnZLcZD7ZS6TWlhtTi~9LFk7TsnMLswTvtURvQ3IaUxurh~hWEUaGxCfczFUSsjDDfIRorEOTiRzXl7g~jNTGnkXSjoB4TSryXCU53kRXiyQkgfNeCa-cge-Zfi7QvfRpwqoGGfVcuMgvmb8bebHkHmFScGB3uDLSoZi2aPzxtsRnfc2H-vHqA1VT38XSyFpnvltYvau3igDgYu7IyExu6sKzM0sXzbHeUZYaxwV7cC0ycCnwDPSQqhBA__')] bg-contain">
          <div className="w-full h-full bg-[#0d56ab]/90 flex justify-center items-center gap-32">
            <div className="flex flex-col w-full md:w-[25%] gap-10 px-2 md:px-0 justify-center  h-full">
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
            <div className="w-[600px] h-[340px] bg-[#D9D9D9] flex flex-col justify-between  rounded-lg">
              <div className="self-center mt-20">
                <img src={bigStartButton} alt="" />
              </div>
              <div className="w-[600px] h-[50px] bg-[#25252599]  flex  items-center justify-between px-4">
                <img src={startbutton} alt="startbutton" />
                <img src={timelinebar} alt="timeline" />
                <img src={airplay} alt="timeline" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full my-20">
        <div className="  w-full h-full  flex items-center justify-center gap-40">
          <img src={phone} alt="phone" />
          <div className="flex flex-col w-[28%] gap-4">
            <p className=" text-lg mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="flex items-center gap-10">
              <img
                className="w-[185px] h-[55px]"
                src={googlePlay}
                alt="google"
              />
              <img
                className="w-[185px] h-[55px]"
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
