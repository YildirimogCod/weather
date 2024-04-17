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
        <div className="flex flex-col w-full"></div>
      </div>
    </main>
  );
}
