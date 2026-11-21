import Home from "@/pages/Home/Home";
import Movies from "@/pages/Movies/Movies";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home/>
  },
  {
    path: "/movies",
    element: <Movies/>
  }
])