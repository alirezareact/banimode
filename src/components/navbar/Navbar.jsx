import { Link } from "react-router";
import Links from "../../links/Links";
import Container from "../container/Container";
import { useAppContext } from "../../context/AppContext";
import Loged from "../login/Loged";

const Navbar = () => {
  const { cartQty } = useAppContext();
  console.log("cartQty:", cartQty);

  return (
    <Container>
      <div className="header w-full h-[150px] flex flex-wrap py-6">
        <div className="w-full flex items-center">
          <div className="w-1/4 flex items-center gap-3">
            <Link className="cursor-pointer" to="/cart">
              <div className="shop relative">
                <img src="img/header/cart-new.svg" alt="" />
                {cartQty > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#19B16A] rounded-full p-1 w-5 h-5 flex items-center justify-center text-white text-xs">
                    {cartQty}
                  </span>
                )}
              </div>
            </Link>
            <Loged />
          </div>
          <div className="w-1/2 flex justify-center relative">
            <input
              className="w-full bg-[#F3F3F3] py-3 pr-12 pl-6 rounded-[8px] outline-none focus:ring-2 focus:ring-green-500"
              type="search"
              placeholder="جست و جو میان هزاران برند و صدها هزار کالا"
            />
            <span className="icon-search absolute top-4.5 right-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          <div className="w-1/4 flex justify-end">
            <Link to="/">
              <img src="img/header/banilogo.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center gap-8 mt-3">
          <div className="flex items-center gap-1 cursor-pointer relative after:content-[''] after:absolute after:top-[110%] after:right-0 after:bg-[#00BF6F] after:w-0 after:h-[2px] after:rounded-full after:transition-all after:duration-200 hover:after:w-full py-[3px]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            دسته بندی کالاها
          </div>
          <div className="w-[2px] h-[60%] bg-[#EDEDED]"></div>
          <div className="flex h-full items-center">
            <ul className="h-full flex gap-6 items-center !m-0">
              <Links />
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
