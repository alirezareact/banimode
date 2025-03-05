import { Outlet, useNavigate } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";

const PrivateRoute = () => {
  const { isLogin } = useAppContext();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
    setIsChecking(false);
  }, [isLogin, navigate]);

  if (isChecking) {
    return null; 
  }

  return isLogin ? <Outlet /> : null;
};

export default PrivateRoute;
