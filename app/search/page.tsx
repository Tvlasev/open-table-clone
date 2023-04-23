import NavBar from "../components/NavBar/NavBar";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient, Restaurant } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurantByCity = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_page: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) {
    return prisma.restaurant.findMany({ select });
  }

  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    },
    select,
  });

  return restaurants;
};

const fetchLocations = async () => {
  return await prisma.location.findMany()
}

const fetchCuisines = async () => {
  return await prisma.cuisine.findMany()
}

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar locations={locations} cuisines={cuisines} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((res) => {
              return <RestaurantCard key={res.id} restaurant={res} />;
            })
          ) : (
            <p>Sorry, there are no restaurants in this city</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
