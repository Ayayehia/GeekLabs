import React from "react";
import { useState, useEffect } from "react";

const WheelPicker = ({ options, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Calculate and apply transformations based on selectedIndex
  const calculateTransforms = () => {
    const transforms = options.map((_, index) => {
      const offset = index - selectedIndex;
      // Adjust these values to achieve the desired 3D effect
      const rotateX = offset * 30; // Degree of rotation for each item
      const translateY = offset * -30; // Vertical position adjustment
      const scale = 1 - Math.abs(offset) * 0.2; // Scale adjustment for perspective
      return `rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`;
    });
    return transforms;
  };

  const [transforms, setTransforms] = useState(calculateTransforms());

  useEffect(() => {
    setTransforms(calculateTransforms());
  }, [selectedIndex, options]);

  const handleScroll = (e) => {
    // Implement scroll logic to update selectedIndex
    // Placeholder logic; you'll need to refine this
    const direction = e.deltaY > 0 ? 1 : -1;
    setSelectedIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;
      return Math.max(0, Math.min(options.length - 1, nextIndex));
    });
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="w-full"
    >
      <h3 className="font-bold text-sm">{title}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="wheel-container !w-full "
        onWheel={handleScroll}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${index === selectedIndex ? "selected" : ""}`}
            style={{ transform: transforms[index], textWrap: "nowrap" }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WheelPicker;
