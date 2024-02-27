import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Table from "./components/Table";
import Filters from "./components/Filters";
import { useState } from "react";
function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen((prevState) => !prevState);
  };
  return (
    <main className="grid grid-cols-7 gap-4 relative ">
      <div className="col-span-7 md:col-span-5 text-white  relative ">
        <div className="md:ml-[132px]">
          <Header
            sidebarOpen={sidebarOpen}
            setSideBarOpen={setSideBarOpen}
            handleViewSidebar={handleViewSidebar}
          />
          <Table />
        </div>
        {sidebarOpen && (
          <div className="absolute top-0 left-0 z-10 h-full">
            <SideBar
              setSideBarOpen={setSideBarOpen}
              handleViewSidebar={handleViewSidebar}
            />
          </div>
        )}
      </div>
      {/* second component */}
      <div className="col-span-5 md:ml-[132px] xl:col-span-2 ">
        <Filters />
      </div>
    </main>
  );
}

export default App;
