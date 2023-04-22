import RestaurantNavBar from "./components/RestaurantNavBar";
import Header from "./components/Header";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Review";
import Reservation from "./components/Reservation";
import { FC } from "react";

const RestaurantDetails: FC = () => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <Reservation />
    </>
  );
};

export default RestaurantDetails;
