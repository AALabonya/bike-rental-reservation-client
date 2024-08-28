import OurTeam from "@/components/Shared/OurTeam";
import PageTitleForHome from "@/components/Shared/PageTitleForHome";
import { url } from "inspector";
import { Link, NavLink } from "react-router-dom";
import {
  FaBicycle,
  FaGlobe,
  FaMobileAlt,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";
import { LocateIcon, Phone } from "lucide-react";
import { BiEnvelope } from "react-icons/bi";
export default function About() {
  const milestones = [
    {
      year: "2012",
      event:
        "Founded Renroll with a vision to provide affordable and eco-friendly transportation options.",
      icon: <FaBicycle />,
    },
    {
      year: "2014",
      event:
        "Expanded our fleet to 500 bikes and scooters, covering all major cities in the country.",
      icon: <FaUsers />,
    },
    {
      year: "2016",
      event:
        "Reached 50,000 satisfied customers and introduced online booking through our website.",
      icon: <FaGlobe />,
    },
    {
      year: "2018",
      event:
        "Launched a mobile app, making it easier for users to rent bikes and scooters on the go.",
      icon: <FaMobileAlt />,
    },
    {
      year: "2022",
      event:
        "Introduced electric bikes and scooters to our fleet, promoting sustainable transportation.",
      icon: <FaLeaf />,
    },
    {
      year: "2024",
      event:
        "Celebrated 1 million rides and introduced a premium subscription service for frequent users.",
      icon: <FaUsers />,
    },
    // Add more milestones here
  ];
  return (
    <div>
      <div
        className="contactbgimg"
        style={{
          backgroundImage: 'url("https://i.ibb.co/GVnJgFf/breadcrumb.jpg")',
        }}
      >
        <div className=" bg-[#3b3737b2]">
          <div className=" max-w-screen-2xl mx-auto py-44">
            <h2 className="md:text-6xl text-2xl font-bold text-white font-serif ml-5  lg:ml-20">
              About Us
            </h2>
            <div className="mt-2 ml-5  lg:ml-20">
              <NavLink
                to="/"
                className="navAfter relative font-medium text-base text-white mx-3"
              >
                Home /
              </NavLink>
              <NavLink
                to="/about-us"
                className="navAfter relative font-medium text-base text-white mx-1 "
              >
                About-us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 ">
        <PageTitleForHome title="About Us" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mt-12 md:mt-28 px-6 md:px-20">
        <div className="flex flex-col">
          <div className="flex justify-center md:justify-end font-bold">
            <h1 className="text-2xl md:text-3xl text-center md:text-end mb-10 md:mb-28">
              Renroll - The company <br /> to offer the best
              <br /> scooter & bike rental services
            </h1>
          </div>
          <div>
            <img
              src="https://i.ibb.co/Hx885yh/renroll-0820248434.webp"
              alt=""
              className="w-full h-60 md:h-80 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <img
              src="https://images.unsplash.com/photo-1558980663-3685c1d673c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full md:w-2/3 h-52 md:h-72 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/3 h-52 md:h-72 object-cover"
            />
          </div>
          <div className="mt-8 md:mt-12">
            <h1 className="text-2xl md:text-3xl"> Renting Service Features</h1>
            <p className="mt-5">
              Consectetur adipisicing elit sed eiusmod tempor dolore magna
              aliqua ad minim veniam quis nostrud exercitation aliquip.
            </p>
            <p className="mt-2">Free booking cancellation up to 15 hours</p>
            <p>We offer 24/7 road rental assistance</p>
            <p>More than 350,000 satisfied customers</p>
            <p>Fleet of over 8,000 brand new scooters & bikes</p>
          </div>
        </div>
      </div>
      <OurTeam />

      {/* Mission */}
      <div className="bg-gray-100 dark:bg-black py-16 mt-10 px-20">
        <div>
          <div className="flex flex-col md:flex-row md:gap-10 items-center">
            <div className="flex-1">
              <img
                className="rounded-md h-[55vh]"
                src="https://i.ibb.co/Hx885yh/renroll-0820248434.webp"
                alt="CoxRide Mission"
              />
            </div>
            <div className="flex-1 bg-white md:-ml-20 p-12 rounded-md">
              <h2 className="text-2xl text-dark_01 md:text-5xl font-semibold">
                Our Mission at CoxRide
              </h2>
              <p className="text-black my-4 text-justify">
                At CoxRide, our mission is to redefine urban mobility by
                providing accessible, eco-friendly, and reliable transportation
                solutions. We are committed to enhancing the way people move
                through their cities by offering a seamless rental experience
                that prioritizes convenience, sustainability, and customer
                satisfaction. Join us in making every ride a step towards a
                greener and more connected world.
              </p>
              <Link to="/about">
                <button className="bg-primary px-6 py-3 rounded-md text-white uppercase">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* history  */}
      {/* <div className="mb-12 px-4 md:px-8 lg:px-20">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Our History & Milestones
        </h2>
        <div className="space-y-8 relative">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center relative group">
              <div className="flex-shrink-0 w-24 text-3xl font-bold text-gray-600">
                {milestone.year}
              </div>
              <div className="flex-1 ml-4 text-lg text-gray-700 flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl text-blue-500 mr-4 group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                  {milestone.icon}
                </div>
                <div>{milestone.event}</div>
              </div>
              {index < milestones.length - 1 && (
                <div className="absolute left-14 top-12 w-px h-12 bg-gray-300 group-hover:bg-blue-500 transition duration-300"></div>
              )}
            </div>
          ))}
          <div className="absolute left-14 top-0 w-px h-full bg-gray-200"></div>
        </div>
      </div> */}
      <h2 className="text-4xl font-bold mb-8 text-center">
        Our History & Milestones
      </h2>
      <div className="mb-12 px-4 md:px-8 lg:px-20  flex justify-center">
        <div className="relative space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start relative">
              <div className="flex-shrink-0 w-24 text-xl font-semibold text-gray-600">
                {milestone.year}
              </div>
              <div className="ml-8">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {milestone.icon}
                </div>
                <div className="ml-6 mt-2 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                  <div className="text-lg font-medium text-gray-800">
                    {milestone.event}
                  </div>
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="absolute left-10 top-10 w-px h-full bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16 mt-10 px-20">
        <div>
          <div className="flex flex-col md:flex-row md:gap-10 items-center">
            <div className="flex-1">
              <iframe
                src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="left-0 top-0  w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg h-[58vh] border-2 "
              ></iframe>
            </div>
            <div className="flex-1 bg-white md:-ml-16 px-14 py-10 shadow-lg rounded-md">
              <h2 className="text-2xl text-dark_01 md:text-5xl font-semibold">
                Contact Us
              </h2>
              <div>
                {" "}
                <div className="flex gap-4 mt-5">
                  <LocateIcon />
                  <div className="-mt-1">
                    <p>Mirpur, Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <Phone />
                  <div className="-mt-1">
                    <p>+880123456789</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 mb-5">
                  <BiEnvelope className="w-6 h-5 mb-2" />
                  <div className="-mt-1">
                    <p>help@ornald.com</p>
                  </div>
                </div>
              </div>
              <Link to="">
                <button className="w-full px-3 py-2 rounded-md text-white uppercase bg-red-500 font-bold">
                  Send
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://images.unsplash.com/photo-1625902382333-015279a4d88d?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
