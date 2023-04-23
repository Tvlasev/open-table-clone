import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { PrismaClient, Item } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchMenuItems = async (slug: string): Promise<Item[]> => {
  const restaurnat = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurnat) {
    notFound();
  }

  return restaurnat.items;
};

const RestarantMenu = async ({ params }: { params: { slug: string } }) => {
  const menuItems = await fetchMenuItems(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menuItems={menuItems} />
      </div>
    </>
  );
};

export default RestarantMenu;
