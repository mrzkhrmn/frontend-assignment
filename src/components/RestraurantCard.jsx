import { Link } from "react-router-dom";

export const RestraurantCard = ({ img, name }) => {
  return (
    <Link to={"/restaurant/123"} className="cursor-pointer w-[500px] h-[250px]">
      <img
        className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
        src={img}
        alt="restaurant1"
      />
      <p className="text-center mb-1 font-normal text-lg">{name}</p>
    </Link>
  );
};
