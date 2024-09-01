import React from "react";

interface PageTitleForHomeProps {
  title?: string;
}

const PageTitleForHome: React.FC<PageTitleForHomeProps> = ({ title = "" }) => {
  const divide = title.split(" ");
  const greenText = divide[divide.length - 1];
  const blackText = divide.slice(0, -1);

  return (
    <div className="flex justify-center w-full my-3 relative py-4">
      <div>
        <h1 className="text-3xl font-bold border-black pr-2 uppercase">
          {blackText.map((text, index) => (
            <span
              className="text-gray-600 text-lg md:text-2xl lg:text-3xl"
              key={index}
            >
              {text}{" "}
            </span>
          ))}
          <span className="text-red-500 text-lg md:text-2xl lg:text-3xl">
            {greenText}
          </span>
        </h1>
        <h1 className="text-4xl md:text-6xl opacity-10 font-bold border-black pr-2 uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          {blackText.map((text, index) => (
            <span
              className="text-gray-600 text-lg md:text-2xl lg:text-3xl"
              key={index}
            >
              {text}{" "}
            </span>
          ))}
          <span className="text-gray-600 text-lg md:text-2xl lg:text-3xl">
            {greenText}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default PageTitleForHome;
