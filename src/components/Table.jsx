import React from "react";
import titleLogo from "../assets/DollarLogo.png";
import numberLogo from "../assets/PaperLogo.png";
import StocksLogo from "../assets/StocksLogo.png";
import LowRiskLogo from "../assets/LowRisk.png";
import hightRiskLogo from "../assets/HighRisk.png";
import { Scrollbars } from "react-custom-scrollbars-2";
const data = [
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 2", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "High Risk", logo: hightRiskLogo, color: "green" },
  },
  {
    title: { value: "Title 2", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "High Risk", logo: hightRiskLogo, color: "green" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
  {
    title: { value: "Title 1", logo: titleLogo },
    number: { value: 200, logo: numberLogo },
    stocks: { value: "-0.25%", logo: StocksLogo },
    risk: { value: "Low Risk", logo: LowRiskLogo, color: "red" },
  },
];

const Table = () => {
  return (
    <Scrollbars style={{ height: 800 }}>
      <div className="mt-10 text-black ">
        {data.map((item, index) => (
          <div
            className="bg-[#414040] w-full rounded-lg flex justify-evenly items-center text-white py-3 mb-4"
            key={index}
          >
            <span className="flex gap-7 ">
              <img src={item.title.logo} />
              {item.title.value}
            </span>
            <span className="md:flex gap-7 hidden">
              <img src={item.number.logo} />
              {item.number.value}
            </span>
            <span className="flex gap-7 " style={{ color: item.risk.color }}>
              <img src={item.stocks.logo} />
              {item.stocks.value}
            </span>
            <span className="md:flex gap-7 hidden ">
              <img src={item.risk.logo} />
              {item.risk.value}
            </span>
          </div>
        ))}
      </div>
    </Scrollbars>
  );
};

export default Table;
