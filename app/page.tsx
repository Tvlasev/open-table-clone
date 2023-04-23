import Header from "./components/Header/Header";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import { PrismaClient } from "@prisma/client";
import { Restaurant } from "@prisma/client";
import { RestaurantCardType } from "./types";

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      location: true,
      cuisine: true,
      price: true,
      main_page: true,
      slug: true,
    }
  });

  return restaurants;
};

const Home = async () => {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      {restaurants.map((res: RestaurantCardType) => {
        return (
          <RestaurantCard
            key={res.id}
            name={res.name}
            location={res.location}
            cuisine={res.cuisine}
            price={res.price}
            main_page={res.main_page}
            id={res.id}
            slug={res.slug}
          />
        );
      })}
    </main>
  );
};

export default Home;
