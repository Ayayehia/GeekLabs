// import SideBar from "./components/SideBar";
import Header from "./components/Header";
function App() {
  return (
    <main className="grid grid-cols-7 gap-4 ml-[132px]">
      {/* <SideBar /> */}
      <div className="col-span-7 md:col-span-5 text-white  ">
        <Header />
        <div>Table</div>
      </div>
      {/* second component */}
      <div className="col-span-7 md:col-span-2">
        <p>The right section</p>
      </div>
    </main>
  );
}

export default App;
