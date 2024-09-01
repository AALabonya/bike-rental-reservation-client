import { FaRoad } from "react-icons/fa6";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { SiAdguard } from "react-icons/si";
import { TbDiscount } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
export default function Pricing() {
  return (
    <div className="mt-12">
      {/* 
      <div
        className="relative min-h-[70vh] mb-12"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1609204276470-d22da7d40a3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-[#c7c7c7] bg-opacity-40"
          style={{ padding: "0px 0px 100px 0px" }}
        ></div>
        <div className="relative z-10 flex items-center justify-center min-h-[40vh] text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl text-white font-bold pt-16">
              Our Pricing Include
            </h1>
            <p className="mb-5 text-white">
              Bikes & electric scooters for renting at low prices
            </p>
            <div className="flex flex-wrap gap-5 pt-12">
              <div className="bg-white w-36 h-36 rounded-full flex justify-center items-center flex-col">
                <GiFullMotorcycleHelmet className="w-12 h-12 mb-2 text-red-600" />
                <p>Helmets</p>
              </div>
              <div className="bg-white w-36 h-36 mt-12 rounded-full flex justify-center items-center flex-col">
                <TfiHeadphoneAlt className="w-12 h-12 mb-2 text-red-600" />
                <p>Assistance</p>
              </div>
              <div className="bg-white w-32 h-32 mt-24 rounded-full flex justify-center items-center flex-col">
                <SiAdguard className="w-12 h-12 mb-2 text-red-600" />
                <p>Insurance</p>
              </div>
              <div className="bg-white w-32 h-32 mt-24 rounded-full flex justify-center items-center flex-col">
                <ImCancelCircle className="w-12 h-12 mb-2 text-red-600" />
                <p>Cancellation</p>
              </div>
              <div className="bg-white w-32 h-32 mt-16 rounded-full flex justify-center items-center flex-col">
                <TbDiscount className="w-12 h-12 mb-2 text-red-600" />
                <p>Discount</p>
              </div>
              <div className="bg-white w-32 h-32  rounded-full flex justify-center items-center flex-col">
                <FaRoad className="w-12 h-12 mb-2 text-red-600" />
                <p>Full Routes</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*banner*/}

      <div
        className="relative min-h-[70vh] "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1609203273185-891fa1029588?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-[#333333] bg-opacity-40"
          style={{ padding: "0px 0px 100px 0px" }}
        ></div>
        <div className="relative z-10 flex items-center justify-center min-h-[40vh] text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 lg:text-5xl text-3xl text-white font-bold pt-16">
              Our Pricing Include
            </h1>
            <p className="mb-5 text-white">
              Bikes & electric scooters for renting at low prices
            </p>
            <div className="grid  grid-cols-3 lg:grid-cols-6 lg:gap-14 pt-12 gap-5 px-3">
              <div className="bg-white dark:text-black w-16 h-16 lg:w-32 lg:h-32 rounded-full flex justify-center items-center flex-col">
                <GiFullMotorcycleHelmet className="lg:w-10 lg:h-10 mb-2 text-red-600 " />
                <p className="text-[10px] lg:text-base">Helmets</p>
              </div>
              <div className="bg-white  dark:text-black w-16 h-16 lg:w-32 lg:h-32 lg:mt-16 rounded-full flex justify-center items-center flex-col p-2">
                <TfiHeadphoneAlt className="lg:w-10 lg:h-10 mb-2 text-red-600 " />
                <p className="text-[10px] lg:text-base">Assistance</p>
              </div>
              <div className="bg-white  dark:text-black w-16 h-16 lg:w-32 lg:h-32 lg:mt-24 rounded-full flex justify-center items-center flex-col">
                <SiAdguard className="lg:w-10 lg:h-10 mb-2 text-red-600 " />
                <p className="text-[10px] lg:text-base">Insurance</p>
              </div>
              <div className="bg-white  dark:text-black w-16 h-16 lg:w-32 lg:h-32 lg:mt-24 rounded-full flex justify-center items-center flex-col">
                <ImCancelCircle className="lg:w-10 lg:h-10 mb-2 text-red-600 " />
                <p className="text-[10px] lg:text-base"> Cancellation</p>
              </div>
              <div className="bg-white  dark:text-black w-16 h-16 lg:w-32 lg:h-32 lg:mt-16 rounded-full flex justify-center items-center flex-col">
                <TbDiscount className="lg:w-10 lg:h-10 mb-2 text-red-600 " />
                <p className="text-[10px] lg:text-base">Discount</p>
              </div>
              <div className="bg-white  dark:text-black w-16 h-16 lg:w-32 lg:h-32 mb-3 rounded-full flex justify-center items-center flex-col">
                <FaRoad className="lg:w-10 lg:h-10 mb-2 text-red-600 " />
                <p className="text-[10px] lg:text-base">Full Routes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
