import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { LocateIcon, Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div>
        <div
          className="w-full bg-white text-white"
          style={{
            backgroundImage: 'url("https://i.ibb.co/3N9d4r2/bike1.jpg")',
          }}
        >
          <div className=" bg-[#3b3737b2] py-12 pl-36">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-8 lg:px-0 md:px-10 px-5">
              <div className="relative ">
                <h2 className="text-xl font-bold mb-2 uppercase">
                  About CoxRide
                </h2>
                <span className="w-28 h-[2px] bg-green absolute"></span>
                <p className="mt-5">Welcome to CoxRide</p>
                <div className="flex gap-4 mt-5">
                  <LocateIcon />
                  <div className="-mt-1">
                    <p>Gulshan, Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <Phone />
                  <div className="-mt-1">
                    <p>+880123456789</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-3">
                  <BiEnvelope />
                  <div className="-mt-1">
                    <p>me@coxride.com</p>
                  </div>
                </div>
              </div>
              <div className="relative lg:ml-24">
                <h2 className="text-xl font-bold mb-2 uppercase">
                  Quick Links
                </h2>
                <span className="w-28 h-[2px] bg-green absolute"></span>
                <div className="mt-5 flex flex-col gap-4">
                  <NavLink
                    to={"/"}
                    className={"hover:text-green font-semibold"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/about-us"}
                    className={"hover:text-green font-semibold"}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to={"/products"}
                    className={"hover:text-green font-semibold"}
                  >
                    Products
                  </NavLink>
                </div>
              </div>
              <div className="relative lg:ml-16">
                <h2 className="text-xl font-bold mb-2 uppercase">
                  Quick Links
                </h2>
                <span className="w-28 h-[2px] bg-green absolute"></span>
                <div className="mt-5 flex flex-col gap-4">
                  <NavLink
                    to={"/"}
                    className={"hover:text-green font-semibold"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/about-us"}
                    className={"hover:text-green font-semibold"}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to={"/products"}
                    className={"hover:text-green font-semibold"}
                  >
                    Products
                  </NavLink>
                </div>
              </div>
              <div className="relative lg:ml-16">
                <h2 className="text-lg font-bold mb-2 uppercase">
                  Stay Connected
                </h2>
                <span className="w-28 h-[2px] bg-green absolute"></span>

                <div className="mt-5 ">
                  <h3 className="text-lg font-bold">Follow Us</h3>
                  <div className="flex w-full max-w-sm items-center space-x-5 mt-2">
                    <FaFacebook className="size-6 hover:text-green cursor-pointer" />
                    <FaInstagram className="size-6 hover:text-green cursor-pointer" />
                    <FaTwitter className="size-6 hover:text-green cursor-pointer" />
                    <FaYoutube className="size-6 hover:text-green cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black text-gray-300 py-4 ">
          <div className=" px-[74px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:justify-between justify-center gap-5">
              <div className="text-sm lg:text-left text-center">
                COPYRIGHT © 2024, ALL RIGHTS RESERVED. POWERED BY{" "}
                <NavLink to={"/"} className={"font-bold"}>
                  CoxRide
                </NavLink>
              </div>
              <div className="flex lg:justify-end justify-center">
                <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
