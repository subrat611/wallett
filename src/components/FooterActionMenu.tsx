import { ChartPie, Cog, History, House, Plus } from "lucide-react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { cn } from "../utils";

interface menuItemsIconType {
  className?: string;
}

interface MenuItemType {
  path: string;
  Icon: React.FC<menuItemsIconType>;
  label: string;
}

const menuItems: MenuItemType[] = [
  {
    path: "/",
    Icon: (className) => (
      <House className={cn(className, "w-6 h-6 text-gray-50")} />
    ),
    label: "Home",
  },
  {
    path: "/",
    Icon: (className) => (
      <ChartPie className={cn(className, "w-6 h-6 text-gray-50")} />
    ),
    label: "Stats",
  },
  {
    path: "/",
    Icon: (className) => (
      <History className={cn(className, "w-6 h-6 text-gray-50")} />
    ),
    label: "History",
  },
  {
    path: "/",
    Icon: (className) => (
      <Cog className={cn(className, "w-6 h-6 text-gray-50")} />
    ),
    label: "Settings",
  },
];

const FooterActionMenu = () => {
  return (
    <div className="h-16 w-full bg-gray-900 fixed bottom-0">
      <div className="h-full flex items-center justify-between">
        <ul className="flex items-center h-full">
          {menuItems.slice(0, 2).map((item, index) => (
            <MenuItem item={item} key={`${item.label}-${index}`} />
          ))}
        </ul>
        <div className="relative w-5 h-full">
          <Button
            size="icon"
            className="rounded-lg origin-center rotate-45 h-10 w-10 absolute -top-4 left-[50%] -translate-x-[50%]"
          >
            <Plus size="22px" className="rotate-45" />
          </Button>
        </div>
        <ul className="flex items-center h-full">
          {menuItems.slice(2).map((item, index) => (
            <MenuItem item={item} key={`${item.label}-${index}`} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MenuItem = ({ item }: { item: MenuItemType }) => {
  return (
    <Link to={item.path}>
      <li className="p-2 mx-3">
        <item.Icon />
      </li>
    </Link>
  );
};

export default FooterActionMenu;
