import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Plans from "../pages/plans/Plans";
import Watch from "../pages/watch/Watch";
import Browse from "../pages/browse/Browse";
import NotFound404 from "../pages/404/NotFound404";
import PrivateRoutes from "./PrivateRoutes";
import PlansManage from "../pages/plansManage/PlansManage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/plans",
        element: <PrivateRoutes />,
        children: [
          { path: "/plans", element: <Plans /> },
          { path: "/plans/manage", element: <PlansManage /> },
        ],
      },
      {
        path: "/browse",
        element: <PrivateRoutes />,
        children: [
          { path: "/browse", element: <Browse /> },
          { path: "/browse/watch/:id", element: <Watch /> },
        ],
      },

      { path: "/*", element: <NotFound404 /> },
    ],
  },
]);
