import React from "react";
import CardLayout from "./card/CardLayout";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import IndustryCollapse from "./IndustryCollapse";
import RadioCollapse from "./RadioCollapse";
import CarsoulChoice from "./CarsoulChoice";
import WheelPicker from "./WheelPicker";
const Filters = () => {
  return (
    <div className="bg-[#181818]   rounded-lg mt-4 mx-8 mb-6 text-white flex flex-col items-center gap-4 max-w-[472px] h-full">
      <h3 className=" mt-4 font-semibold text-2xl">Filters</h3>
      <div className="flex flex-col font-medium text-sm gap-2 w-full ">
        <div className="flex justify-between  mx-6 ">
          <span className="text-[#979797]">Filters Applied</span>
          <span>Clear All</span>
        </div>
        <CardLayout>
          <span className="inline-flex items-center gap-x-0.5 rounded-md bg-[#53ACFF]  text-xs font-medium text-[#202020] h-[18px]  pl-1 pr-1 py-[2px]">
            Real Estate
            <button type="button" className="group relative -mr-1  rounded-sm ">
              <span className="sr-only">Remove</span>
              <svg
                viewBox="0 0 14 14"
                className="h-3.5 w-3.5 stroke-[#202020] group-hover:stroke-gray-700/75"
              >
                <path d="M4 4l6 6m0-6l-6 6" />
              </svg>
              <span className="absolute -inset-1" />
            </button>
          </span>
        </CardLayout>
      </div>
      <CardLayout>
        <h3 className="font-bold text-sm">Stock</h3>
        <div className="relative ">
          {/* Adjusted width for mobile */}
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-[#313131] py-1.5 pl-4 pr-3 text-[#737373] placeholder:text-[#737373] sm:text-sm sm:leading-6 mt-3"
            placeholder="$ TICKER "
            type="search"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-1 pb-2">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col justify-around items-center ml-6 mr-4 ">
          <div>
            <IndustryCollapse />
          </div>

          <div className="flex justify-between w-full ">
            <RadioCollapse
              title="Market Cap"
              notificationMethods={[
                { id: "1", title: "Micro" },
                { id: "2", title: "Small" },
                { id: "3", title: "Large" },
              ]}
            />
            <RadioCollapse
              title="Risk Level"
              notificationMethods={[
                { id: "4", title: "Low Risk" },
                { id: "5", title: "Mid Risk" },
                { id: "6", title: "Low Risk" },
              ]}
            />
          </div>

          <div className="flex justify-between w-full">
            <WheelPicker
              title="Strategy"
              options={["BIg Options Buy", "Merger Artitrage", "Short Reports"]}
            />
            <WheelPicker
              title="Asset"
              options={["Stocks", "Options", "Futures"]}
            />
          </div>
        </div>
      </CardLayout>
      <button
        type="button"
        className="w-[161px] h-[43px] rounded-md bg-[#53ACFF] px-3 py-2  text-xl font-semibold text-white shadow-sm my-5 "
      >
        Apply
      </button>
    </div>
  );
};

export default Filters;
