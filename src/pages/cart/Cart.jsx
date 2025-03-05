import StepOrder from "../../components/stepOrder/StepOrder";
import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { checkDiscount } from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import Input from "../../components/input/input";
import Buttons from "../../components/button/Button";
import { formatNumber } from "../../utils/formatNumber";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { Modals } from "../../components/modal/Modals";
import Cookies from "js-cookie";

const Cart = () => {
  const { cartItems } = useAppContext();
  const [products, setProducts] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const navigate = useNavigate();
  const { isLogin } = useAppContext();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    async function getProductData() {
      const data = await getProducts();
      setProducts(data);
    }
    getProductData();
  }, []);

  const cartProducts = products.filter((product) =>
    cartItems.some((item) => item.id == product.id)
  );

  let totalPrice = cartItems.reduce((total, item) => {
    let selectedProduct = products.find((product) => product.id == item.id);
    return (
      total +
      (selectedProduct?.Price -
        (selectedProduct?.Price * selectedProduct?.percent) / 100) *
        item.qty
    );
  }, 0);

  const submitDiscount = async () => {
    const data = await checkDiscount(discountCode);
    setDiscountPercent(data[0].discount);
  };

  const handlerStep2 = () => {
    isLogin && Cookies.get("token") ? navigate("/cartstep2") : setModalShow(true);
  };

  useEffect(() => {
    if (!modalShow) {
      navigate("/cart");
    }
  }, [modalShow, navigate]);

  return (
    <Container>
      <div className="py-[20px]">
        {cartProducts.length === 0 ? (
          <div className="flex flex-wrap gap-[20px] py-[10px]">
            <div className="w-full flex justify-center">
              <img
                className="w-[150px]"
                src="img/cart/thank-unsucess.svg"
                alt=""
              />
            </div>
            <div className="w-full flex justify-center">
              <p className="text-[20px]">سبد خرید شما خالی است</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center items-center">
              <div className="flex">
                <StepOrder
                  src="img/cart/shipping-lev-0.svg"
                  fontWeight="font-bold"
                  border="border-[2px] border-[#19B16A]"
                  title="سبد خرید"
                />
                <span className="mt-[40px]">
                  <svg
                    width="80"
                    height="2"
                    viewBox="0 0 80 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="80"
                      y1="1"
                      y2="1"
                      stroke="#EDEDEE"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    ></line>
                  </svg>
                </span>
                <StepOrder
                  src="img/cart/shipping-lev-1.svg"
                  fontWeight="font-bold"
                  border="border-[2px] border-[#ededee]"
                  color="text-[#494c52]"
                  title="اطلاعات ارسال"
                  onClickHandler={handlerStep2}
                />
                <span className="mt-[40px]">
                  <svg
                    width="80"
                    height="2"
                    viewBox="0 0 80 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="80"
                      y1="1"
                      y2="1"
                      stroke="#EDEDEE"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    ></line>
                  </svg>
                </span>
                <StepOrder
                  src="img/cart/shipping-lev-2.svg"
                  fontWeight="font-bold"
                  border="border-[2px] border-[#ededee]"
                  color="text-[#494c52]"
                  title="اطلاعات پرداخت"
                />
              </div>
              <div className="w-full flex bg-[#fafafa] leading-[60px] text-[#656565] px-[10px] font-medium mt-[10px]">
                <div className="w-[40%] text-[16px]">سبد خرید شما</div>
                <div className="w-[20%] flex justify-center items-center text-[16px]">
                  قیمت واحد
                </div>
                <div className="w-[20%] flex justify-center items-center text-[16px]">
                  تعداد
                </div>
                <div className="w-[20%] flex justify-center items-center text-[16px]">
                  قیمت نهایی
                </div>
              </div>
            </div>
            <div className="py-[30px]">
              <div>
                <div className="flex items-center gap-[5px]">
                  <div className="flex items-center gap-[5px]">
                    <img src="../../img/cart/seller-icon.svg" alt="" />
                    <p className="text-[16px] !mb-0 text-[#a1a5a9] font-bold">
                      فروشنده:
                    </p>
                  </div>
                  <div>
                    <span className="text-[16px] font-bold text-black">
                      بانی مد
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {cartProducts.map((product) => {
              const cartItem = cartItems.find((item) => item.id === product.id);

              return (
                <CartItem
                  key={product.id}
                  qty={cartItem.qty}
                  title={product.title}
                  brand={product.brand}
                  orgPrice={product.Price}
                  finalPrice={
                    product.Price - (product.Price * product.percent) / 100
                  }
                  img={product.img}
                  id={product.id}
                />
              );
            })}

            <div className="bg-[#FAFAFA] w-full py-[40px] px-[20px] flex items-center justify-between">
              <div className="w-[60%] border-l-2 border-[#e6e6e6] pl-[30px]">
                <div className="flex flex-wrap gap-[10px] justify-start ">
                  <div className="w-full">
                    <p className="text-[16px] font-bold">
                      ثبت کد تخفیف / بانی بن :
                    </p>
                  </div>
                  <Input
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className={"border-2 border-[#00BF6F] py-[10px] px-[30px]"}
                  />
                  <Buttons
                    onClick={submitDiscount}
                    className="text-white px-[15px] py-[10px] rounded-[5px]"
                  >
                    بررسی
                  </Buttons>
                </div>
              </div>
              <div className="w-[35%] flex flex-wrap items-center gap-[15px]">
                <div className="flex justify-between text-[#666] w-full">
                  <p className="text-[15px]">قیمت کل سفارش :</p>
                  <p className="text-[16px]">
                    {formatNumber(totalPrice)} تومان
                  </p>
                </div>
                <div className="flex justify-between text-[#666] w-full">
                  <p className="text-[15px]">سود شما از این خرید :</p>
                  <p className="text-[16px]">
                    {formatNumber(
                      (parseInt(totalPrice) * discountPercent) / 100
                    )}{" "}
                    تومان
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-[16px]">قیمت قابل پرداخت :</p>
                  <p className="text-[#00BF6F] text-[16px]">
                    {formatNumber(
                      totalPrice -
                        (parseInt(totalPrice) * discountPercent) / 100
                    )}{" "}
                    تومان
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[20px] flex justify-between items-center">
              <p>
                <span className="text-[#f37a23]">
                  افزودن کالا به سبد خرید به معنی رزرو آن نیست{" "}
                </span>
                با توجه به محدودیت موجودی سبد خود را ثبت و خرید را تکمیل کنید.
              </p>
              <Buttons onClick={handlerStep2} className="text-white  px-[50px] py-[15px] rounded-[10px]">
                ثبت و ورود به مرحله بعد
              </Buttons>
            </div>
          </>
        )}
      </div>

      <div className="hidden invisible">
        <Button
          style={{
            backgroundColor: "#00bf6f",
            borderRadius: "28px",
            padding: "8px 24px",
            border: "none",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#009657")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#00bf6f")}
          onClick={handlerStep2}
        >
          ورود / ثبت نام
        </Button>

        <Modals show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </Container>
  );
};

export default Cart;
