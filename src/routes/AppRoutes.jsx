import { Route, Routes } from "react-router";
import { routes } from "./routes.constant";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) =>
        route.isPrivate ? (
          <Route key={route.path} element={<PrivateRoute />}>
            <Route key={route.path} path={route.path} element={route.element} />
          </Route>
        ) : (
          <Route key={route.path} path={route.path} element={route.element} />
        )
      )}
    </Routes>
  );
};

export default AppRoutes;
