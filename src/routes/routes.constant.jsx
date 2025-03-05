import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import Cart from "../pages/cart/Cart";
import Cart2 from "../pages/cart/Cart2";
import Cart3 from "../pages/cart/Cart3";
import Product from "../pages/product/Product";
import Men from "../pages/men/Men";
import Women from "../pages/women/women";

export const routes = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/store",
    element: <Store />,
    isPrivate: false,
  },
  {
    path: "/men",
    element: <Men />,
    isPrivate: false,
  },
  {
    path: "/women",
    element: <Women />,
    isPrivate: false,
  },
  {
    path: "/cart",
    element: <Cart />,
    isPrivate: false,
  },
  {
    path: "/product/:id",
    element: <Product />,
    isPrivate: false,
  },
  {
    path: "/cartstep2",
    element: <Cart2 />,
    isPrivate: true,
  },
  {
    path: "/cartstep3",
    element: <Cart3 />,
    isPrivate: true,
  },
];
