import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { ErrorPage } from "./pages/error";
import { ProductDetail } from "./pages/detail";
import { Layout } from "./components/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export { router };
