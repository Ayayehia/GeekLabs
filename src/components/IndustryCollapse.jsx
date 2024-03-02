import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import Arrow from "../assets/Arrow.png";
import titleLogo from "../assets/DollarLogo.png";
import HealthCare from "../assets/HealthCareSvg.svg";
import Materials from "../assets/MaterialsSvg.svg";
import Energy from "../assets/EnergySvg.svg";
import ConsumerDiscretionary from "../assets/Consumer-dis.svg";
import Consumerstaples from "../assets/ConsumerStable.svg";
import RealEstate from "../assets/RealEstate.svg";
import IT from "../assets/ItSvg.svg";
import Industrials from "../assets/IndustrialsSvg.svg";
import Utilities from "../assets/UtailitiesSvg.svg";
import Financials from "../assets/FinancialsSvg.svg";
import Communicationsvg from "../assets/communicationSvg.svg";
import Line from "../assets/Line 11.svg";
const data = [
  { value: HealthCare, title: "Health Care" },

  { value: Materials, title: "Materials" },

  { value: Energy, title: "Energy" },

  { value: ConsumerDiscretionary, title: "Consumer Discretionary" },

  { value: Consumerstaples, title: "Consumer Staples" },

  { value: RealEstate, title: "Real Estate" },

  { value: IT, title: "It" },

  { value: Communicationsvg, title: "Communication" },

  { value: Industrials, title: "Industrials" },

  { value: Utilities, title: "Utilities" },
  { value: Financials, title: "Financials" },

  //ther entries similarly
];

const IndustryCollapse = () => {
  return (
    <div>
      <h3>
        <span className="font-bold flex items-center mt-4 gap-1 mb-3">
          {/* <img src={Arrow} className="w-2 h-[6px]" />  */}
          Industry
        </span>
      </h3>
      <div>
        <div className="grid grid-cols-2 text-xs gap-12 text-nowrap ">
          <ul className="relative">
            <img
              src={Line}
              className="absolute top-0 left-0 h-[155px] w-[2px] "
            />
            {data.slice(0, 6).map((info, index) => (
              <li key={index} className="flex gap-2 mb-2 ml-2 mt-2">
                <img src={info.value} />
                <p>{info.title}</p>
              </li>
            ))}
          </ul>
          <ul className="relative">
            <img
              src={Line}
              className="absolute top-0 left-0 h-[130px] w-[2px] "
            />
            {data.slice(6, 11).map((info, index) => (
              <li key={index} className="flex gap-2 mb-2 ml-2 mt-2">
                <img src={info.value} />
                <p>{info.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustryCollapse;
