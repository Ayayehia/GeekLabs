// import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Table from "./components/Table";
import Filters from "./components/Filters";
function App() {
  return (
    <main className="grid grid-cols-7 gap-4 ml-[132px]">
      {/* <SideBar /> */}
      <div className="col-span-7 md:col-span-5 text-white  ">
        <Header />
        <Table />
      </div>
      {/* second component */}
      <div className="col-span-5 lg:col-span-2">
        <Filters />
      </div>
    </main>
  );
}

export default App;
