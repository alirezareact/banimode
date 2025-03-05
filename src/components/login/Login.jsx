import React from "react";

import Button from "react-bootstrap/Button";
import { Modals } from "../modal/Modals";

const Login = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        style={{
          backgroundColor: "#00bf6f",
          borderRadius: "28px",
          padding: "8px 24px",
          border: "none",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#009657")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#00bf6f")}
        onClick={() => setModalShow(true)}
      >
        ورود / ثبت نام
      </Button>

      <Modals show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Login;
