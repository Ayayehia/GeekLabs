import React, { useState } from "react";

const CarsoulChoice = ({ words, label }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipe = (event) => {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      setActiveIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    } else if (deltaY < 0) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? words.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center my-6 ">
      <p className="text-sm text-white mb-2 mx-7 font-bold  text-nowrap">
        {label}
      </p>
      <div
        className="relative h-24 w-1/2 flex items-center justify-center text-sm text-white overflow-hidden text-nowrap ml-6"
        onWheel={handleSwipe}
      >
        {words.map((word, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
              index === activeIndex
                ? "bg-blue-500 rounded-md px-2 py-[1px] w-fit"
                : "opacity-50"
            }`}
            style={{
              transform: `translateY(calc(-${activeIndex * 100}% + ${
                index * 100
              }%))`,
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsoulChoice;
