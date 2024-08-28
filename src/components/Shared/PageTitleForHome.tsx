const PageTitleForHome = ({ title }) => {
  const divide = title?.split(" ");
  const greenText = divide[divide.length - 1];
  const blackText = divide.slice(0, -1);

  return (
    <div className="flex justify-center w-full my-3 relative py-4">
      <div className="">
        <h1 className="text-3xl font-bold border-black pr-2 uppercase">
          {blackText.map((text) => (
            <span className="text-gray-600" key={text}>
              {" "}
              {text}{" "}
            </span>
          ))}{" "}
          <span className="text-red-500 ">{greenText}</span>
        </h1>
        <h1 className="text-4xl md:text-6xl opacity-10 font-bold border-black pr-2 uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          {blackText.map((text) => (
            <span className="text-gray-600" key={text}>
              {" "}
              {text}{" "}
            </span>
          ))}{" "}
          <span className="text-gray-600">{greenText}</span>
        </h1>
      </div>
    </div>
  );
};

export default PageTitleForHome;
