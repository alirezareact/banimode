import Login from "../login/Login";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAppContext } from "../../context/AppContext";
import Cookies from "js-cookie";

const Loged = () => {
  const { isLogin } = useAppContext();
  console.log("loged:", isLogin);

  const userName = decodeURIComponent(Cookies.get("userName"));

  console.log("userName:", userName);

  return (
    <div>
      {isLogin ? (
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#19B16A] transition-all duration-200">
          <PersonOutlineOutlinedIcon style={{ fontSize: "28px" }} />
          <span>{userName + " " + "عزیر"}</span>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Loged;
