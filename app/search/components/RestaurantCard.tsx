import { Price, Cuisine, Location } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
  id: number;
  name: string;
  main_page: string;
  price: Price;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}
const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, main_page, price, cuisine, location, slug } = restaurant;

  return (
    <div className="border-b flex pb-5">
      <img
        src={main_page}
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">{price}</p>
            <p className="mr-4">{cuisine.name}</p>
            <p className="mr-4">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
