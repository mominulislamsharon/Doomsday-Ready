import Booking from "@/pages/Booking/Booking";
import Home from "@/pages/Home/Home";

import Movies from "@/pages/Movies/Movies";
import RewatchPlan from "@/pages/RewatchPlan/RewatchPlan";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/rewatch-plan",
    element: <RewatchPlan />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);
