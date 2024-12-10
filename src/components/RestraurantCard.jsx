import { Link } from "react-router-dom";

export const RestraurantCard = ({ img, name }) => {
  return (
    <div className="cursor-pointer xl:w-[calc(50%-40px)] w-full  overflow-hidden ">
      <Link to={"/restaurant/123"} className="flex flex-col">
        <img
          className=" w-full max-h-[260px] object-cover rounded-lg object-center"
          src={img}
          alt="restaurant1"
        />
        <p className="text-center font-normal text-lg mt-1">{name}</p>
      </Link>
    </div>
  );
};
