import AirPollution from "./Components/AirPollution/AirPollution";
import Temperature from "./Components/Temperature/Temperature";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="mx-4 lg:mx-6 xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 mt-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:min-w-[35m]">
          <Temperature />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:cols-3 lg:grid-cols-2 xl:grid-cols-4">
            <AirPollution />
          </div>
        </div>
      </div>
    </main>
  );
}
