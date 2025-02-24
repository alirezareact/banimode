import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import Cart from "../pages/cart/Cart";
import Product from "../pages/product/Product";
import Login from "../pages/Login/Login";
import Men from "../pages/men/Men";
import Women from "../pages/women/women";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
