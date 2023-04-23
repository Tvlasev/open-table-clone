import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";

interface SideBarProps {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string };
}
const SideBar = ({ locations, cuisines, searchParams }: SideBarProps) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((loc) => {
          return (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: loc.name,
                },
              }}
              key={loc.id}
              className="font-light text-reg capitalize"
            >
              {loc.name}
            </Link>
          );
        })}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => {
          return (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  cuisine: cuisine.name,
                },
              }}
              key={cuisine.id}
              className="font-light text-reg capitalize"
            >
              {cuisine.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
