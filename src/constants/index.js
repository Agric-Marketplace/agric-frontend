import { Edit, FileIcon, House, PlusIcon, User } from "lucide-react";

export default {
  NAVLINKS: [
    {
      name: "Overview",
      path: "/dashboard",
      icon: House,
    },
    {
      name: "Create Ad",
      path: "/dashboard/create-ad",
      icon: PlusIcon,
    },
    {
      name: "Farmer Ads",
      path: "/dashboard/ads",
      icon: FileIcon,
    },
    {
      name: "Profile",
      path: "/dashboard",
      icon: User,
    },
    // {
    //   name: "Update Ad",
    //   path: "/dashboard/edit-ad/:id",
    //   icon: Edit,
    // },
  ],
};
