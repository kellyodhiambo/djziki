import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Mixes from "../pages/mixes/page";
import Booking from "../pages/booking/page";
import Gallery from "../pages/gallery/page";
import Audio from "../pages/audio/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/mixes", element: <Mixes /> },
  { path: "/audio", element: <Audio /> },
  { path: "/booking", element: <Booking /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
