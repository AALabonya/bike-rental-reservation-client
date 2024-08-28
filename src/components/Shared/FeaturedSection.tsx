import PageTitleForHome from "./PageTitleForHome";

export default function FeaturedSection() {
  return (
    <>
      <div className="mt-12">
        <PageTitleForHome title="Featured Section" />
      </div>
      <div className="flex justify-center mt-10 px-12 lg:px-0">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
            <img
              className="h-[300px] w-full bg-gray-600 object-cover"
              src="https://autobike.jollyany.co/images/tz_portfolio_plus/image_gallery/7/harley-davidson-mvx3y17umae-unsplash.jpg"
              alt="card navigate ui"
            />
            <div className="p-5 space-y-6">
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-2xl font-semibold ">Yamaha XT 250</h3>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Made with genuine leather, our Classic Leather Jacket is the
                  perfect addition to every wardrobe.
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/gear.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    230 km/h <br />
                    <small>Maximum Speed</small>
                  </h1>
                </div>
                <div className="flex gap-6 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/Age.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    15
                    <br />
                    <small>Minimum Age</small>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/calendar-48.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    2021
                    <br />
                    <small>Year</small>
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/Cooling.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    Horizontal
                    <br />
                    <small>Engine Type</small>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/motorbike-50.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    Yamaha <br />
                    <small>Make</small>
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/layer-60.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    XT
                    <br />
                    <small>Model</small>
                  </h1>
                </div>
              </div>
              <button className="w-full rounded-lg bg-red-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
            <img
              className="h-[300px] w-full bg-gray-600 object-cover"
              src="https://autobike.jollyany.co/images/tz_portfolio_plus/image_gallery/6/kirill-petropavlov-f-gcjlncvwo-unsplash.jpeg"
              alt="card navigate ui"
            />
            <div className="p-5 space-y-6">
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-2xl font-semibold ">Yamaha XT 250</h3>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Made with genuine leather, our Classic Leather Jacket is the
                  perfect addition to every wardrobe.
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/gear.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    230 km/h <br />
                    <small>Maximum Speed</small>
                  </h1>
                </div>
                <div className="flex gap-6 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/Age.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    15
                    <br />
                    <small>Minimum Age</small>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/calendar-48.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    2021
                    <br />
                    <small>Year</small>
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/Cooling.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    Horizontal
                    <br />
                    <small>Engine Type</small>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/motorbike-50.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    Yamaha <br />
                    <small>Make</small>
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/layer-60.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    XT
                    <br />
                    <small>Model</small>
                  </h1>
                </div>
              </div>
              <button className="w-full rounded-lg bg-red-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-full max-w-md space-y-4 rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
            <img
              className="h-[300px] w-full bg-gray-600 object-cover"
              src="https://autobike.jollyany.co/images/tz_portfolio_plus/image_gallery/8/harley-davidson-xnhmpwebv5i-unsplash.jpg"
              alt="card navigate ui"
            />
            <div className="p-5 space-y-6">
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-2xl font-semibold ">Yamaha XT 250</h3>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Made with genuine leather, our Classic Leather Jacket is the
                  perfect addition to every wardrobe.
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/gear.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    230 km/h <br />
                    <small>Maximum Speed</small>
                  </h1>
                </div>
                <div className="flex gap-6 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/Age.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    15
                    <br />
                    <small>Minimum Age</small>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/calendar-48.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    2021
                    <br />
                    <small>Year</small>
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/Cooling.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    Horizontal
                    <br />
                    <small>Engine Type</small>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://autobike.jollyany.co/images/motorbike-50.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    Yamaha <br />
                    <small>Make</small>
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  {" "}
                  <img
                    src="https://autobike.jollyany.co/images/layer-60.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <h1>
                    XT
                    <br />
                    <small>Model</small>
                  </h1>
                </div>
              </div>
              <button className="w-full rounded-lg bg-red-500 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
