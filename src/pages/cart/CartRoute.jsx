import { Route, Routes } from "react-router";
import PrivateRoute from "../../components/privateRoute/PrivateRoute";
import { CartRoutes } from "./cartRoute.constant";

const CartRoute = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {CartRoutes.filter((route) => route.isPrivate).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {CartRoutes.filter((route) => !route.isPrivate).map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default CartRoute;
