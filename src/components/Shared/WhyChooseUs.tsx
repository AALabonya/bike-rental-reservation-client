import {
  FaBicycle,
  FaCheck,
  FaMobileAlt,
  FaStar,
  FaLeaf,
  FaHeadset,
} from "react-icons/fa";
import PageTitleForHome from "./PageTitleForHome";
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

function WhyChooseUs() {
  return (
    <div className="lg:py-16 dark:bg-black">
      {/* Combined Why Choose Us Section */}
      <div>
        <JackInTheBox>
          {" "}
          <div className="lg:mt-12">
            <PageTitleForHome title="Why Choose CoxRide" />
          </div>
        </JackInTheBox>

        <p className="max-w-3xl mx-auto text-md md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300">
          Discover the reasons why CoxRide is the preferred choice for bike and
          scooter rentals.
        </p>
      </div>
      <section className="">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Fade>
                {" "}
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-gray-100">
                  Diverse Fleet of Vehicles
                </h3>
              </Fade>
              <Slide>
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                  We offer a wide range of bikes and scooters to suit every
                  need, whether you're commuting or exploring.
                </p>
              </Slide>

              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Zoom>
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                        <FaBicycle />
                      </div>
                    </Zoom>
                  </div>
                  <div className="ml-4">
                    <Fade>
                      {" "}
                      <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        Wide Selection of Bikes
                      </h4>
                    </Fade>
                    <Slide>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Choose from a variety of bikes and scooters to suit your
                        needs, whether it’s for commuting or leisure.
                      </p>
                    </Slide>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Zoom>
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                        {" "}
                        <FaMobileAlt />
                      </div>
                    </Zoom>
                  </div>
                  <div className="ml-4">
                    <Fade>
                      {" "}
                      <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        Easy Online Booking
                      </h4>
                    </Fade>

                    <Slide>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Book your ride in just a few clicks using our
                        user-friendly website or mobile app.
                      </p>
                    </Slide>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Zoom>
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                        {" "}
                        <FaCheck />
                      </div>
                    </Zoom>
                  </div>
                  <div className="ml-4">
                    <Fade>
                      {" "}
                      <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        Flexible Rental Periods
                      </h4>
                    </Fade>

                    <Slide>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Rent by the hour, day, or week with no hidden fees,
                        offering flexibility to match your schedule.
                      </p>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Zoom>
                <img
                  src="https://i.ibb.co/py7ZDp4/renroll-1255749166.webp"
                  alt="Bike rental image"
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </Zoom>
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <Fade>
                  {" "}
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-gray-100">
                    Exceptional Service
                  </h3>
                </Fade>

                <Slide>
                  <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                    Our commitment to providing top-notch service ensures a
                    smooth and enjoyable experience for all our customers.
                  </p>
                </Slide>

                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Zoom>
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                          {" "}
                          <FaStar />
                        </div>
                      </Zoom>
                    </div>
                    <div className="ml-4">
                      <Fade>
                        {" "}
                        <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                          Top-Rated Service
                        </h4>
                      </Fade>

                      <Slide>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          We’re proud of our customer service, with thousands of
                          5-star reviews from happy customers.
                        </p>
                      </Slide>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Zoom>
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                          {" "}
                          <FaLeaf />
                        </div>
                      </Zoom>
                    </div>
                    <div className="ml-4">
                      <Fade>
                        <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                          Eco-Friendly Options
                        </h4>
                      </Fade>

                      <Slide>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Choose from our fleet of electric bikes and scooters,
                          supporting sustainable transportation.
                        </p>
                      </Slide>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Zoom>
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                          {" "}
                          <FaHeadset />
                        </div>
                      </Zoom>
                    </div>
                    <div className="ml-4">
                      <Fade>
                        {" "}
                        <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                          24/7 Customer Support
                        </h4>
                      </Fade>

                      <Slide>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Our support team is available around the clock to
                          assist with any questions or concerns.
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Zoom>
                  {" "}
                  <img
                    src="https://templatekit.jegtheme.com/scootie/wp-content/uploads/sites/173/2021/09/woman-riding-on-motorbike-in-street-RJJCM5Z.jpg"
                    alt="Woman riding scooter"
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
