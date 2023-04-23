import { Cuisine, Location } from "@prisma/client";

interface SideBarProps {
  locations: Location[];
  cuisines: Cuisine[];
}
const SideBar = ({ locations, cuisines }: SideBarProps) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((loc) => {
          return (
            <p key={loc.id} className="font-light text-reg capitalize">
              {loc.name}
            </p>
          );
        })}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => {
          return (
            <p key={cuisine.id} className="font-light text-reg capitalize">
              {cuisine.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
