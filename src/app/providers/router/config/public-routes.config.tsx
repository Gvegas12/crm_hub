import { RouteProps } from "react-router-dom";
import { publicRoutePaths } from "@/shared/config/routes";


export const publicRouteConfig: RouteProps[] = [
  {
    path: publicRoutePaths.login,
    element: <div>Login</div>,
  },
];
