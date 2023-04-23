import Link from "next/link";
import { RestaurantCardType } from "../../types"


const RestaurantCard = ({ name, main_page, price, location, cuisine, slug }: RestaurantCardType) => {

  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      <Link href={`/restaurant/${slug}`}>
        <div className="p-4 w-64 h-72 m-3 rounded overflow-hidden cursor-pointer bg-gray-100 border-2 border-rose-600">
          <img
            src={main_page}
            alt=""
            className="w-full h-36"
          />
          <div className="p-1">
            <h3 className="font-bold text-2xl mb-2">{name}</h3>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2">77 reviews</p>
            </div>
            <div className="flex text-reg font-light capitalize">
              <p className=" mr-3">{cuisine.name}</p>
              <p className="mr-3">{price}</p>
              <p>{location.name}</p>
            </div>
            <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
