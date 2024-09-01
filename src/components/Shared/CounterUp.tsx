import { Parallax } from "react-parallax";
import CountUp from "react-countup";

import { BsScooter } from "react-icons/bs";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
export default function CounterUp() {
  return (
    <div className="mt-24">
      <Parallax bgImage={"https://i.ibb.co/9TZcWHz/7canoszy.png"}>
        <div>
          <div className="flex-1 lg:px-32 px-2 ">
            <div className="flex gap-8 lg:gap-24  py-4">
              <div className="flex gap-4 justify-center items-center">
                <BsScooter className="text-white w-12 h-12 lg:w-24 lg:h-44 " />
                <div className="items-center">
                  <span className="font-bold text-white md:text-2xl text-lg lg:text-3xl">
                    <CountUp end={3000} duration={10} />
                  </span>
                  <h1 className="font-bold text-white text-[12px] md:text-[15px] lg:text-xl">
                    Scooters & Bikes
                  </h1>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <GiAmericanFootballHelmet className="text-white w-12 h-12 lg:w-24 lg:h-44  " />
                <div className="items-center">
                  <span className="font-bold text-white md:text-2xl text-lg lg:text-3xl">
                    <CountUp end={2000} duration={12} />
                  </span>
                  <h1 className="font-bold text-white text-[12px] md:text-[15px] lg:text-xl">
                    Booking Served
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-24 py-4">
              <div className="flex gap-4 justify-center items-center">
                <FaDownload className="text-white w-12 h-12 lg:w-24 lg:h-44  " />
                <div className="items-center">
                  <span className="font-bold text-white md:text-2xl text-lg lg:text-3xl ">
                    <CountUp end={1620} duration={12} />
                  </span>
                  <h1 className="font-bold text-white text-[12px] md:text-[15px] lg:text-xl">
                    Happy Customers
                  </h1>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaUsers className="text-white w-12 h-12 lg:w-24 lg:h-44 " />
                <div className="items-center">
                  <span className="font-bold text-white md:text-2xl text-lg lg:text-3xl">
                    <CountUp end={1620} duration={12} />
                  </span>
                  <h1 className="font-bold text-white text-[12px] md:text-[15px] lg:text-xl">
                    Happy Customers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </Parallax>
    </div>
  );
}
