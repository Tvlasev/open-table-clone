import RestaurantNavBar from "./components/RestaurantNavBar";
import Header from "./components/Header";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from './components/Description';
import Images from "./components/Images";
import Reviews from "./components/Review";
import Reservation from "./components/Reservation";
import { FC } from "react";
import { PrismaClient } from '@prisma/client';
import { RestaurantType } from "../../types";

const prisma = new PrismaClient();

const fetchRestaurant = async (slug: string): Promise<RestaurantType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    }
  })

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
}

const RestaurantDetails = async ({params}: {params: {slug: string}}) => {
  const restaurant = await fetchRestaurant(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <Reservation />
    </>
  );
};

export default RestaurantDetails;
