import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import Movies from "@/pages/Movies/Movies";
import RewatchPlan from "@/pages/RewatchPlan/RewatchPlan";
import Booking from "@/pages/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "rewatch-plan",
        element: <RewatchPlan />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
    ],
  },
]);
