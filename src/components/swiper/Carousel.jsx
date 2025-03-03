import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { Link } from "react-router";
import { formatNumber } from "../../utils/formatNumber";

const Carousel = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getProductData() {
      const data = await getProducts();

      setProductData(data);
    }

    getProductData();
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      navigation={true}
      modules={[Navigation]}
    >
      {productData.map((item, i) => (
        <SwiperSlide className="w-full h-[500px]" key={item.id}>
          <Link to={`product/${item.id}`}>
            <div className="img-amazing-slider rounded-2xl h-[400px] border-2 border-[#0000000f]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={item.img}
                alt={`Slider ${i}`}
              />
            </div>
          </Link>
          <div className="content-imazing mt-[10px]">
            <div className="flex justify-between">
              <Link to={`product/${item.id}`}>
                <div className="brand text-[16px] font-semibold">
                  <h4>{item.brand}</h4>
                </div>
              </Link>
              <div className="orgPrice text-[13px] line-through text-[#666666]">
                <p>{formatNumber(item.Price)} تومان</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <Link to={`product/${item.id}`}>
                <div className="brand text-[13px] text-[#666666] line-clamp-1 w-[60%]">
                  <p>{item.title}</p>
                </div>
              </Link>
              <div className="orgPrice text-[14px] text-[#00BF6F] w-[40%] flex justify-end">
                <p>{formatNumber((item.Price * item.percent) / 100)} تومان</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
