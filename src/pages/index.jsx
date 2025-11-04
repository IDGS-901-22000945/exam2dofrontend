import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "./Home";
import Resultados from "./Resultados";
import DetalleProducto from "./DetalleProducto";
import NotFound from "./NotFound";
import Compras from "./Compras";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/items",
        element: <Resultados />,
      },
      {
        path: "/items/:id",
        element: <DetalleProducto />,
      },
      {
        path: "/sales",
        element: <Compras />,
      },
    ],
  },
]);
