"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { thermo } from "@/app/utils/Icon";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { airQulaityIndexText } from "@/app/utils/misc";

const AirPollution = () => {
  const { airQuality } = useGlobalContext();
  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  )
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );

  const airQualityIndex = airQuality.list[0].main.aqi * 10;
  console.log(airQualityIndex);
  const filteredQualityIndex = airQulaityIndexText.find((item) => {
    return item.rating === airQualityIndex;
  });
  console.log(filteredQualityIndex);
  return (
    <div
      className="air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
    dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {thermo} Air pollution
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress" />
      <p>Air quality is {filteredQualityIndex?.description}.</p>
    </div>
  );
};

export default AirPollution;