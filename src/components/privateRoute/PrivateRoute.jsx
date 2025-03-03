import { Outlet } from "react-router";
import React, { useEffect } from "react";

import Button from "react-bootstrap/Button";
import { Modals } from "../modal/Modals";
import { useAppContext } from "../../context/AppContext";

const PrivateRoute = () => {
  const { isLogin } = useAppContext();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    if (!isLogin) {
      setModalShow(true);
    }
  }, [isLogin]);

  return (
    <div>
      {isLogin ? (
        <Outlet />
      ) : (
        <>
          <Button
            style={{
              backgroundColor: "#00bf6f",
              borderRadius: "28px",
              padding: "8px 24px",
              border: "none",
              visibility: "hidden",
              display: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#009657")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#00bf6f")}
            onClick={() => setModalShow(true)}
          >
            ورود / ثبت نام
          </Button>
          <Modals show={modalShow} onHide={() => setModalShow(false)} />
        </>
      )}
    </div>
  );
};

export default PrivateRoute;
