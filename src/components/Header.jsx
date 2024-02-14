import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import notification from "../assets/notification.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ sidebarOpen, setSideBarOpen }) => {
  const handleViewSidebar = () => {
    setSideBarOpen((prevState) => !prevState);
  };
  return (
    <Disclosure as="nav" className="bg-[#202020] mt-9  ">
      <>
        <div className="flex h-16 items-center w-full">
          <div className="mr-7">
            <button
              type="button"
              className="font-bold text-5xl hover:text-white focus:outline-none"
              onMouseEnter={handleViewSidebar}
            >
              ALERTS
            </button>
          </div>
          <div className="flex w-3/4">
            <div className="relative w-full md:w-3/4 mr-3">
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-white placeholder:text-white sm:text-sm sm:leading-6"
                placeholder="Search BY ..."
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <img src={notification} />
            </button>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Header;
