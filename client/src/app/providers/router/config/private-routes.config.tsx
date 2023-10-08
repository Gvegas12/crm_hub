import { RouteProps } from "react-router-dom";

import { privateRoutePaths } from "@/shared/config/routes";
import HomePage from "@/pages/HomePage";

export const privateRouteConfig: RouteProps[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: privateRoutePaths.contacts,
    element: <div>contacts</div>,
  },
];
