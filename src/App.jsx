import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Table from "./components/Table";
import Filters from "./components/Filters";
import { useState } from "react";
function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  return (
    <main className="grid grid-cols-7 gap-4 relative ">
      <div className="col-span-7 md:col-span-5 text-white   relative ">
        <div className="ml-[132px]">
          <Header sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
          <Table />
        </div>
        {sidebarOpen && (
          <div className="absolute top-0 left-0 z-10 h-full">
            <SideBar />
          </div>
        )}
      </div>
      {/* second component */}
      <div className="col-span-5 ml-[132px] xl:col-span-2 ">
        <Filters />
      </div>
    </main>
    // <>
    //   <main className="grid grid-cols-7 gap-4 ">
    //     {sidebarOpen && <SideBar />}
    //     <div className="col-span-7 md:col-span-5 text-white  ml-[132px]">
    //       <Header sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
    //       <Table />
    //     </div>
    //     {/* second component */}
    //     <div className="col-span-5 lg:col-span-2">
    //       <Filters />
    //     </div>
    //   </main>
    // </>
  );
}

export default App;
