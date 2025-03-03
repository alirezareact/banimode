import Cart from "./Cart";
import Cart2 from "./Cart2";
import Cart3 from "./Cart3";

export const CartRoutes = [
  {
    path: "/cart",
    element: <Cart />,
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
