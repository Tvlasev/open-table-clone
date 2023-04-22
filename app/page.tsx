import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
};

export default Home;
