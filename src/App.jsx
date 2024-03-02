import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Table from "./components/Table";
import Filters from "./components/Filters";

function App() {
  return (
    <main className=" gap-4 relative xl:flex xl:flex-row flex flex-col w-full  xl:items-start 2xl:justify-between ">
      <div className="w-[10%] xl:mr-0 sm:mr-12 ">
        <SideBar />
      </div>

      <div className="text-white w-[80%]  ">
        <Header />
        <Table />
      </div>

      <div className=" sm:ml-10 xl:w-[34%] sm:w-[80%] xl:mt-7">
        <Filters />
      </div>
    </main>
  );
}

export default App;
