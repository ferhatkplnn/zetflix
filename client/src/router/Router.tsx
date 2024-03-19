import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Plans from "../pages/plans/Plans";
import Watch from "../pages/watch/Watch";
import Browse from "../pages/browse/Browse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/plans", element: <Plans /> },
      { path: "/browse", element: <Browse /> },
      { path: "/browse/watch/:id", element: <Watch /> },
    ],
  },
]);
