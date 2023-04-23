import { Cuisine, Location, Price, Restaurant } from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_page: string;
  cuisine: Cuisine;
  location: Location;
  price: Price;
  slug: string;
}

export interface RestaurantType {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}
