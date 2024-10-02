import Header from "./components/Header";
import { HomeIcon } from "./icon";

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header/>
      <main className="relative flex bg-gray-100 border h-screen pt-14">
        {/* Left */}
        <div className="fixed top-14 h-full  w-[350px] overflow-auto flex flex-col gap-2 min-2[220px] max-xl:w-[200px]">
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20">
          <HomeIcon className="w-8"/>
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20">
          <HomeIcon className="w-8"/>
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20">
          <HomeIcon className="w-8"/>
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20">
          <HomeIcon className="w-8"/>
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20">
          <HomeIcon className="w-8"/>
          Andy Codecamp
        </button>
        </div>
        {/* center */}
        <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
        <div className="artboard phone-5">414×896</div>
        <div className="artboard phone-5">414×896</div>
        <div className="artboard phone-5">414×896</div>
        <div className="artboard phone-5">414×896</div>
        <div className="artboard phone-5">414×896</div>
        </div>
        {/* right */}
        <div className="fixed top-14 right-0 h-full  w-[350px] overflow-auto flex flex-col gap-2 pt-4 px-2 max-xl:hidden">
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        </div>
      </main>
    </div>
  )
}