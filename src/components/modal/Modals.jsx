import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../input/input";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./stylesModal.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../../services/apiLogin";
import { useAppContext } from "../../context/AppContext";
import Cookies from "js-cookie";

export function Modals(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { onHide, show } = props;
  const [eye, setEye] = useState(false);
  const [showPass, setShowPass] = useState("password");
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useAppContext();
  console.log("login", isLogin);

  const handelLogin = async () => {
    if (!userName || !password) {
      alert(".........");
    }

    const data = await login(userName, password);
    console.log(data);

    const response = {
      token: "sressosjbdp[a15846584",
      expire: "7",
    };

    Cookies.set("token", response.token, { expires: 7 });
    Cookies.set("userName", encodeURIComponent(userName), { expires: 7 });
    location.reload();
  };

  const changeIconPass = () => {
    setEye((prev) => !prev);
    setShowPass((prev) => (prev === "password" ? "text" : "password"));
  };

  const handlerPrivacy = (e) => {
    e.preventDefault();
    onHide();

    setTimeout(() => {
      navigate("/privacy-policy");
    }, 300);
  };

  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="bg-[#00000021]"
      dialogClassName="custom_dialog"
      contentClassName="custom_content"
    >
      <div className="w-full h-full !py-4 px-[15px] !font-IRANSans ">
        <Modal.Header
          closeButton
          className="w-full !px-0 !py-0 !pt-5 !border-0"
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-full text-center !text-[22px] !text-[#28292c] !font-medium"
          >
            ورود یا ثبت نام
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="!p-0 !pt-7.5">
          <p className="w-full !text-[#797979] !text-center !text-[16px] !mb-7.5">
            لطفا برای ادامه شماره همراه خود را وارد نمایید.
          </p>
          <div className="flex flex-col gap-[20px]">
            <div className="relative">
              <Input
                onChange={(e) => setUserName(e.target.value)}
                className={
                  "w-[420px] h-[60px] border-1 border-[#c5c7cb] outline-none rounded-[12px] text-right pr-[20px] pl-[60px] placeholder:text-[15px] placeholder:text-[#c5c7cb]"
                }
                type="text"
                placeholder="نام کاربری"
              />
              <AccountCircleOutlinedIcon className="absolute top-[50%] left-[35px] -translate-y-[50%] text-[#c5c7cb]" />
            </div>
            <div className="relative">
              <Input
                onChange={(e) => setPassword(e.target.value)}
                className={
                  "w-[420px] h-[60px] border-1 border-[#c5c7cb] outline-none rounded-[12px] text-right pr-[20px] pl-[60px] placeholder:text-[15px] placeholder:text-[#c5c7cb]"
                }
                type={showPass}
                placeholder="رمز عبور"
              />
              <span onClick={changeIconPass}>
                {eye ? (
                  <VisibilityOutlinedIcon className="absolute top-[50%] left-[35px] -translate-y-[50%] text-[#c5c7cb]" />
                ) : (
                  <VisibilityOffOutlinedIcon className="absolute top-[50%] left-[35px] -translate-y-[50%] text-[#c5c7cb]" />
                )}
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="!border-0">
          <div className="w-full flex justify-center">
            <Button
              onClick={handelLogin}
              type="submit"
              className={
                "w-[420px] h-[60px] rounded-[12px] text-white text-[16px]"
              }
            >
              ورود به سایت
            </Button>
          </div>
          <div className="w-full flex items-center gap-2 pr-[20px] !mt-[15px]">
            <input
              type="checkbox"
              id="privacy-policy"
              className="appearance-none w-4 h-4 rounded-[4px] bg-[#00BF6F] text-white  relative 
             before:content-['✔'] before:absolute before:left-[3px] before:top-[-1px] before:text-white before:opacity-0 checked:before:opacity-100"
            />
            <label
              htmlFor="privacy-policy"
              className="flex items-center !gap-1 text-[#494c52] text-[12px]"
            >
              <div>
                <Link
                  to={"/privacy-policy"}
                  onClick={handlerPrivacy}
                  className="font-semibold inline-block border-b-[1px] pb-0.5"
                >
                  شرایط و قوانین
                </Link>
                <span className="mr-1">
                  استفاده از سرویس های سایت بانی‌مد را می پذیرم .
                </span>
              </div>
            </label>
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
