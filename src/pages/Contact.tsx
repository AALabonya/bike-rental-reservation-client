import { IoIosSend } from "react-icons/io";

import PageTitleForHome from "@/components/Shared/PageTitleForHome";
export default function Contact() {
  return (
    <div className="py-24">
      <div className=" mb-10">
        <PageTitleForHome title="Contact with coxRide" />
      </div>
      {/* //contract  */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col-reverse md:flex-col gap-3 justify-center mx-auto lg:relative px-4">
          <div className="card lg:w-1/3 bg-green-50 shadow-2xl lg:absolute lg:top-35 lg:right-12 p-6">
            <div className="card-body">
              <div>
                {/* Description  */}
                <h2 className="text-3xl font-extrabold dark:text-black">
                  Get In Touch
                </h2>
                <p className="text-sm mt-4 dark:text-black">
                  Have a specific inquiry or looking to explore new
                  opportunities? Our experienced team is ready to engage with
                  you.
                </p>

                {/* Form Part */}
                <form>
                  <div className="space-y-4 mt-4">
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
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="flex items-center bg-red-500 text-white px-2 rounded py-1"
                    >
                      <IoIosSend className="text-xl mr-2 mb-[3px]" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <img
            className="rounded-xl lg:w-4/6 h-[65vh]"
            src="https://images.unsplash.com/photo-1625902382333-015279a4d88d?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
