import MenuCard from "./MenuCard";
import { Item } from "@prisma/client";

const Menu = ({ menuItems }: { menuItems: Item[] }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menuItems.map((item: Item) => {
            return (
              <MenuCard
                name={item.name}
                description={item.description}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Menu;
