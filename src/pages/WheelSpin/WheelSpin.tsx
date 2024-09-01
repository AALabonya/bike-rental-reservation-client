import { useState } from "react";
import {
  MoveDownRight,
  RotateCw,
  Clipboard,
  Copy,
  MoveUpLeft,
} from "lucide-react";
import "./WheelSpin.css";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { useGetAllCouponsQuery } from "@/redux/features/couponApi";
import { JackInTheBox } from "react-awesome-reveal";
import PageTitleForHome from "@/components/Shared/PageTitleForHome";

type Coupon = {
  title: string;
  discount: number;
  coupon: string;
};

export default function WheelSpin() {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showCoupon, setShowCoupon] = useState(false);
  const navigate = useNavigate();
  const { data: couponsData } = useGetAllCouponsQuery(undefined);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + 360 * 5 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    const selectedIndex = Math.floor(
      (newRotation % 360) / (360 / couponsData?.data.length)
    );
    setTimeout(() => {
      setSelectedCoupon(
        couponsData.data[couponsData?.data.length - 1 - selectedIndex]
      );
      setIsSpinning(false);
      setShowCoupon(true);
    }, 5000);
  };

  const copyToClipboard = async (code: string) => {
    await navigator.clipboard.writeText(code);

    toast.success("coupon copy success");
    navigate("/userDash/rental");
    setShowCoupon(false);
  };

  return (
    <div>
      <JackInTheBox>
        {" "}
        <div className="lg:mt-12">
          <PageTitleForHome title="Spin Wheel" />
        </div>
      </JackInTheBox>
      <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-gray-900 p-4 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:justify-around border p-2 gap-11 lg:gap-28 items-center w-full">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Win Your Discount!
              {/* Spin to  */}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 sm:text-lg">
              Your Next Adventure Just Got More Affordable—Claim Your Coupon!
            </p>
            <button
              onClick={handleSpin}
              className="mt-6 bg-red-500 flex items-center font-semibold text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
              disabled={isSpinning}
            >
              {isSpinning ? (
                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <MoveDownRight className="mr-2 h-4 w-4" />
              )}
              {isSpinning ? "Spinning..." : "Spin the Wheel"}
            </button>
          </motion.div>
          <div className="wheel-container">
            <div
              className="wheel"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {couponsData?.data.map((coupon: Coupon, index: number) => (
                <div
                  key={index}
                  className="wheel-segment"
                  style={{
                    transform: `rotate(${
                      index * (360 / couponsData?.data.length)
                    }deg)`,
                    background: index % 2 === 0 ? "#FF6347" : "#00FF00",
                  }}
                >
                  <div className="wheel-text">
                    {coupon.discount > 0
                      ? `${coupon.discount}% OFF`
                      : "No Luck"}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md"
              onClick={handleSpin}
              disabled={isSpinning}
            >
              <MoveUpLeft className="w-6 h-6 text-red-500 font-bold" />
            </button>
          </div>
        </div>
        {showCoupon && selectedCoupon && (
          <div className="z-50 lg:p-6 p-2 bg-white   -mt-56 dark:bg-gray-800 rounded-lg shadow-xl border-gray-300 border-2">
            <div className="flex items-center gap-4 lg:justify-between lg:flex-row flex-col">
              <div className="flex items-center lg:space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Copy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {selectedCoupon.discount > 0
                      ? `Discount: ${selectedCoupon.discount}%`
                      : "No Discount"}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedCoupon.title}
                  </p>
                </div>
              </div>
              {selectedCoupon.discount > 0 ? (
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow"
                  onClick={() => copyToClipboard(selectedCoupon.coupon)}
                >
                  <Clipboard className="mr-2 h-4 w-4 inline-block" />
                  {selectedCoupon.coupon}
                </button>
              ) : (
                <p className="mt-2 text-red-500">
                  Sorry, no coupon this time! Try again.
                </p>
              )}
            </div>
            {selectedCoupon.discount > 0 && (
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Use the code above to get your discount!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
