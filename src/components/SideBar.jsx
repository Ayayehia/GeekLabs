import Logo from "../assets/Logo.png";
import UserLogo from "../assets/UserLogo.png";
import {
  AlertLogo,
  TrainingLogo,
  AutomationLogo,
  PortfolioLogo,
  TradingLogo,
} from "./Logos";

const navigation = [
  { name: "Alerts", href: "#", icon: AlertLogo, current: true, color: "white" },
  {
    name: "Training",
    href: "#",
    icon: TrainingLogo,
    current: true,
    color: "white",
  },
  {
    name: "Automation",
    href: "#",
    icon: AutomationLogo,
    color: "#5D5D5D",
    current: false,
  },
  {
    name: "Portfolio",
    href: "#",
    icon: PortfolioLogo,
    color: "#5D5D5D",
    current: false,
  },
  {
    name: "Trading",
    href: "#",
    icon: TradingLogo,
    current: false,
    color: "#5D5D5D",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideBar = () => {
  return (
    <nav className="fixed h-screen  z-50">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#181818] px-3 w-[76px]  items-center h-full z-50 ">
        <div className="flex  shrink-0 items-center  mt-7 py-5 mb-14 w-12 h-6">
          <img src={Logo} alt="Company Logo" />
        </div>
        <nav className="flex flex-1 flex-col h-full">
          <ul role="list" className="flex flex-1 flex-col gap-y-7 items-center">
            <li>
              <ul role="list" className=" space-y-1 w-[32px]  ">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-white"
                          : "text-[#5D5D5D] hover:text-white ",
                        "group flex gap-x-3 rounded-md mb-4 text-sm leading-6 font-semibold"
                      )}
                      style={{ marginBottom: "36px" }}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0 "
                        aria-hidden="true"
                      />
                      {/* {item.name} */}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className=" mt-auto ">
              <a
                href="#"
                className="flex items-center gap-x-4  text-sm font-semibold leading-6 text-white hover:bg-gray-800"
              >
                <img
                  className=" rounded-full bg-gray-800 mb-7"
                  src={UserLogo}
                  alt="User Logo"
                />
                {/* <div className="flex flex-col ">
                  <span aria-hidden="true" className="font-bold text-nowrap">
                    Moni Roy
                  </span>
                  <span
                    className="text-[#979797] font-semibold text-sm"
                    aria-hidden="true"
                  >
                    Beginner
                  </span>
                </div> */}
              </a>
              {/* <span
                className="text-[#424242] text-nowrap mt-6 mb-7"
                aria-hidden="true"
              >
                Street Suite.2.0
              </span> */}
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default SideBar;
