import { useState, useEffect } from "react";
import Category from "../../components/category/Category";
import Container from "../../components/container/Container";
import Slider from "../../components/slider/Slider";
import Carousel from "../../components/swiper/Carousel";

const Home = ({ size }) => {
  const [timerSecond, setTimerSecond] = useState(59);
  const [timerMin, setTimerMin] = useState(59);
  const [timerHour, setTimerHour] = useState(23);

  useEffect(() => {
    setInterval(() => {
      setTimerSecond((prevSec) => {
        if (prevSec > 0) {
          return prevSec - 1;
        } else {
          setTimerSecond(59)
          setTimerMin((prevMin) => {
            if (prevMin > 0) {
              return prevMin - 1;
            } else {
              setTimerMin(59)
              setTimerHour((prevHour) => {
                if(prevHour > 0) {
                  prevHour - 1 
                } else {
                  setTimerHour(23)
                }
              })
            }
          });
        }
      });
    }, 1000);
  }, []);

  return (
    <Container>
      <div className="bg-home flex flex-wrap gap-[2%] py-4">
        <Slider src={"img/bg/b1.jpg"} />
        <Slider size={"sm"} src={"img/bg/s1.jpg"} />
        <Slider size={"sm"} src={"img/bg/s2.jpg"} />
        <Slider src={"img/bg/b2.jpg"} />
      </div>
      <div className="category-home w-full py-6 flex justify-between items-center">
        <Category />
      </div>
      <div className="home-amazing w-full py-10">
        <div className="title-home-amazing w-full flex">
          <div className="w-1/2 flex items-center">
            <img className="w-[40%]" src="img/amazing/amazing.png" alt="" />
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-[25%]"></div>
            <div className="w-[40%]">
              <span className="text-[18px] font-semibold text-[#00BF6F]">
                زمان باقی مانده تا پایان سفارش
              </span>
            </div>
            <div className="w-[30%] h-full flex items-center gap-3">
              <span className="h-full w-[50px] rounded-[8px] flex justify-center items-center bg-[#F16423] text-white text-[18px]">
                {timerSecond}
              </span>
              <span className="text-[#F16423] text-[22px]">:</span>
              <span className="h-full w-[50px] rounded-[8px] flex justify-center items-center bg-[#F16423] text-white text-[18px]">
                {timerMin}
              </span>
              <span className="text-[#F16423] text-[22px]">:</span>
              <span className="h-full w-[50px] rounded-[8px] flex justify-center items-center bg-[#F16423] text-white text-[18px]">
                {timerHour}
              </span>
            </div>
          </div>
        </div>
        <div className="slider-amazing my-10">
          <Carousel />
        </div>
      </div>
    </Container>
  );
};

export default Home;
