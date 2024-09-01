import { CiLocationOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <div
        className="bg-cover bg-about-us bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/GVnJgFf/breadcrumb.jpg)",
        }}
      >
        <div className=" md:max-w-screen-2xl mx-auto p-24 justify-center mt-20">
          <h2 className="lg:text-6xl font-bold text-white/90 font-serif text-center">
            Contact Us
          </h2>
          <div className="mt-2 text-center">
            <NavLink
              to="/"
              className=" relative font-medium text-base text-white/90 mx-3"
            >
              Home /
            </NavLink>
            <NavLink
              to="/"
              className="relative font-medium text-base text-white/90"
            >
              Contact Details
            </NavLink>
          </div>
        </div>
      </div>
      {/* contact  */}
      {/* page section */}
      <div className="lg:max-w-screen-2xl w-11/12 mx-auto mt-24 lg:px-32">
        {/* use extra div for change any desgin or any problem */}
        <div>
          <div className="mb-24 flex md:flex-row flex-col justify-center items-center gap-5">
            <div
              className=" md:w-full w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative
                         py-10"
            >
              <p className=" bg-red-500 hover:bg-purple-900 h-10 w-10 lg:h-16 lg:w-16 rounded-full flex flex-col justify-center items-center absolute -top-9">
                <CiLocationOn className="md:text-3xl text-2xl lg:text-5xl font-bold text-white"></CiLocationOn>
              </p>
              <h2 className=" lg:text-2xl font-bold">Visit Us Anytime</h2>
              <p className=" text-gray-500 text-center">
                342/A Brooklyn St, Milson Avenue,
                <br />
                New York, USA
              </p>
            </div>
            <div className="md:w-full w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative">
              <p className=" bg-red-500 hover:bg-purple-900 h-10 w-10 lg:h-16 lg:w-16 rounded-full flex flex-col justify-center items-center absolute -top-9">
                <MdOutlineEmail className="md:text-3xl text-2xl lg:text-5xl font-bold text-white"></MdOutlineEmail>
              </p>
              <h2 className=" lg:text-2xl font-bold">Visit Us Anytime</h2>
              <p className=" text-gray-500 text-center">
                342/A Brooklyn St, Milson Avenue,
                <br />
                New York, USA
              </p>
            </div>
            <div className=" md:w-full w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative">
              <p className=" bg-red-500 hover:bg-purple-900 h-10 w-10 lg:h-16 lg:w-16 rounded-full flex flex-col justify-center items-center absolute -top-9">
                <LuPhoneCall className="md:text-3xl text-2xl lg:text-5xl font-bold text-white"></LuPhoneCall>
              </p>
              <h2 className=" lg:text-2xl font-bold">Visit Us Anytime</h2>
              <p className=" text-gray-500 text-center">
                342/A Brooklyn St, Milson Avenue,
                <br />
                New York, USA
              </p>
            </div>
          </div>
          <div className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-2 md:p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-6 before:absolute before:right-0 before:w-[300px] before:bg-red-500 before:h-full max-md:before:hidden">
              <div>
                {/* Description  */}
                <h2 className="text-3xl font-extrabold">Get In Touch</h2>
                <p className="text-sm mt-8">
                  Have a specific inquiry or looking to explore new
                  opportunities? Our experienced team is ready to engage with
                  you.
                </p>

                {/* Form Part */}
                <form>
                  <div className="space-y-4 mt-8">
                    {/* Name  */}
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0ba360] outline-none"
                    />

                    {/* Email */}
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#0ba360] outline-none"
                    />

                    {/* Message */}
                    <textarea
                      placeholder="Write Message"
                      className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#0ba360] outline-none"
                    ></textarea>
                  </div>

                  {/* Submit Btn */}
                  <div className="mt-12">
                    <button type="submit" className="fullWidthSharedBtn">
                      <IoIosSend className="text-xl mr-2 mb-[3px]" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Google Map */}
              <div className="relative h-full max-md:min-h-[350px]">
                <iframe
                  src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="p-4">
        <h2 className="text-xl font-bold">{selectedTopic?.name}</h2>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: subjects[activeLink]?.content[selectedTopic?.name] || "",
          }}
        />
        <div className="mt-6">
          {currentTopicMcqs.map((mcq, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{mcq.question}</p>
              <div>
                {mcq.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleAnswerSelect(index, option)}
                    className={`block p-2 mt-2 rounded ${
                      showFeedback[index] && selectedAnswers[index] === option
                        ? mcq.correctAnswer === option
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showFeedback[index] && (
                <p
                  className={`mt-2 ${
                    mcq.correctAnswer === selectedAnswers[index]
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {mcq.correctAnswer === selectedAnswers[index]
                    ? "Correct"
                    : "Incorrect"}
                </p>
              )}
            </div>
          ))}
        </div>
      </div> */
}
