import { Link, useParams } from "react-router";
import BtnAdd from "../../components/btn-cart/BtnAdd";
import BtnMin from "../../components/btn-cart/BtnMin";
import { useAppContext } from "../../context/AppContext";
import { formatNumber } from "../../utils/formatNumber";
// import { getProduct } from "../../services/products";

const CartItem = ({
  qty,
  finalPrice,
  orgPrice,
  brand,
  title,
  img,
  id,
  onClick,
}) => {
  const {
    getProductQty,
    increaseProductQty,
    decreaseProductQty,
    removeProduct,
  } = useAppContext();

  return (
    <div className="flex py-[30px]">
      <div className="relative w-[13%]">
        <Link to={`/product/${id}`}>
          <img className="w-[142px]" src={`/${img}`} alt="" />
        </Link>
        <button
          onClick={() => removeProduct(id)}
          className="absolute top-0 right-0 bg-[#6f7377] rounded-full p-[3px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-[87%] flex items-center">
        <div className="w-[31%] flex flex-col gap-[10px]">
          <h4 className="text-[20px] font-semibold">{brand}</h4>
          <a href="#">
            <span className="text-[15px]">{title}</span>
          </a>
        </div>
        <div className="w-[23%] flex justify-center">
          <div>
            <span className="text-[18px] font-medium">
              {formatNumber(orgPrice + " ")}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="w-[23%] flex justify-center items-center">
          <div className="flex items-center">
            <BtnAdd onclick={() => increaseProductQty(id)} />
            <span className="mx-[25px]">{getProductQty(id)}</span>
            <BtnMin onclick={() => decreaseProductQty(id)} />
          </div>
        </div>
        <div className="w-[23%] flex justify-center">
          <div className="text-[#19B16A]">
            <span className="text-[18px] font-medium">
              {formatNumber(finalPrice * getProductQty(id) + " ")}
            </span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
