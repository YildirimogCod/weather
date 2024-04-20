"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import { sunset } from "@/app/utils/Icon";
import { unixToTime } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";

const Sunset = () => {
  const { foreCast } = useGlobalContext();
  if (!foreCast || !foreCast?.sys || !foreCast?.sys?.sunset)
    return <Skeleton className="h-[12rem] w-full" />;

  const times = foreCast?.sys?.sunset;
  const timezone = foreCast?.timezone;

  const sunsetTime = unixToTime(times, timezone);
  const sunrise = unixToTime(foreCast?.sys?.sunrise, timezone);

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sunset}Sunset</h2>
        <p className="pt-4 text-2xl">{sunsetTime}</p>
      </div>

      <p className="text-sm">Sunrise: {sunrise}</p>
    </div>
  );
};

export default Sunset;
