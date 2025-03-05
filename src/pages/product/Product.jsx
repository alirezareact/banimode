import { useParams } from "react-router";
import { getProduct } from "../../services/api";
import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useAppContext } from "../../context/AppContext";
import { formatNumber } from "../../utils/formatNumber";

const Product = () => {
  const { AddToCart } = useAppContext();

  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    async function getProductData() {
      const data = await getProduct(id);
      setData(data);
    }

    getProductData();
  }, [id]);

  return (
    <>
      <Container>
        <div className="flex py-[50px]">
          <div
            className="flex justify-center items-center w-[35%] h-[500px] overflow-hidden rounded-[5px]"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            {data?.img && (
              <img className="h-full" src={`../../public/${data.img}`} alt="" />
            )}
          </div>
          <div className="w-[45%] px-[20px] flex flex-col gap-[25px]">
            <div className="text-[16px] font-semibold">{data.brand}</div>
            <div className="text-[16px] font-semibold">{data.title}</div>
            <div>
              <span className="ml-[5px]">دسته بندی:</span>
              <span className="text-[#19B16A] font-semibold">{data.cat}</span>
            </div>
            <div>
              <span className="px-[7px] py-[4px] border-[2px] border-[#19B16A] rounded-[3px] text-[#19B16A] font-semibold">
                +تخفیف بیشتر در گردونه آف زمستون
              </span>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex justify-between w-[180px] border-2 border-[#EAE9E9] px-[10px] py-[8px]">
                <span>سایز</span>
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between items-center w-[180px] border-2 border-[#EAE9E9] px-[10px] py-[8px]">
                <span>
                  <img src="/img/product/ruler.svg" alt="" />
                </span>
                <span className="text-[18px] text-[#19B16A] font-semibold">
                  سایز من چنده ؟
                </span>
              </div>
            </div>
            <div className="flex items-center py-[10px] px-[15px] rounded-[3px] bg-[#F9FAFB] border-[1px] border-[#ededee]">
              <span>
                <img src="/img/product/2-baniclub.svg" alt="" />
              </span>
              <span>
                با خرید این محصول{" "}
                <strong className="text-[#FBC02D]">329</strong> بانی‌کوین به شما
                تعلق می‌گیرد.
              </span>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="flex flex-col gap-[15px] bg-[#F9FAFB] border-2 border-[#EAE9E9] rounded-[5px] p-[20px]">
              <div className="text-[#c5c7cd] flex justify-end gap-[5px]">
                <div>
                  <span className="text-[20px] font-semibold line-through">
                    {formatNumber(data.Price)}
                  </span>
                  <span>تومان</span>
                </div>
                <div className="px-[5px] py-[5px] bg-[#F16422] text-white font-bold flex justify-center items-center rounded-full mr-2">
                  {data.percent}%
                </div>
              </div>
              <div className="text-[#19B16A] flex justify-end gap-[5px]">
                <span className="text-[22px] font-semibold">
                  {formatNumber((data.Price * data.percent) / 100)}
                </span>
                <span>تومان</span>
              </div>
              <Button
                onClick={() => AddToCart(id)}
                className="bg-[#19B16A] text-white py-[15px] rounded-[5px] text-[16px]"
              >
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;
