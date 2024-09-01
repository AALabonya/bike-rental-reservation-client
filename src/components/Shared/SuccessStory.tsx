import PageTitleForHome from "./PageTitleForHome";

export default function SuccessStory() {
  return (
    <>
      <section className="bg-white dark:bg-black pt-5">
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 ">
          <div className="mt-12">
            <PageTitleForHome title="Our Gallery" />
          </div>

          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 shadow-sm p-4">
                <img
                  alt=""
                  className="w-full h-80 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/x7GLH5N/motorcycle-safety-helmet-23-2151531326.jpg"
                />
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 shadow-sm p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1625902382333-015279a4d88d?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-32 col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                    />
                  </div>
                </div>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-4">
                <img
                  src="https://i.ibb.co/1m7XgbZ/renroll-2705286166-360x270.webp"
                  alt=""
                  className="w-full h-32 col-span-2 row-span-2 rounded shadow-sm min-h-44 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
              </blockquote>
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <img
                  src="https://i.ibb.co/gvRkNQV/father-teaching-his-little-son-ride-bicycle.jpg"
                  alt=""
                  className="w-full h-32 col-span-2 row-span-2 rounded shadow-sm min-h-44 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
              </blockquote>
            </div>
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    className="w-full h-40 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/QcPk7PF/renroll-2705147414-360x270.webp "
                  />
                </div>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-4">
                <img
                  alt=""
                  className="w-full h-44 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/7p8jrL9/renroll-2705252650-360x270-1.webp"
                />
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-4">
                <img
                  alt=""
                  className="w-full h-36 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co/x7GLH5N/motorcycle-safety-helmet-23-2151531326.jpg"
                />
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-5">
                <img
                  src="https://i.ibb.co/QDP2HBz/renroll-2705406499-360x270.webp"
                  alt=""
                  className="w-full h-44 col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                />
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    className="w-full h-60 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/yQF4prP/renroll-2705866725-360x270.webp"
                  />
                </div>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    className="w-full h-36 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/z4LnhgT/renroll-2705442881-360x270.webp"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
