"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import { kelvinToCelcius } from "@/app/utils/misc";
import { useEffect, useState } from "react";
import {
  clearSky,
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
} from "@/app/utils/Icon";
import moment from "moment";
const Temperature = () => {
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  const { foreCast } = useGlobalContext();
  const { main, timezone, name, weather } = foreCast;

  useEffect(() => {
    // upadte time every second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      // custom format: 24 hour format
      const formatedTime = localMoment.format("HH:mm:ss");
      // day of the week
      const day = localMoment.format("dddd");

      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);

    // clear interval
    return () => clearInterval(interval);
  }, [timezone]);
  if (!foreCast || !weather) return <div>Loading</div>;

  const temp = kelvinToCelcius(main?.temp);
  const minTemp = kelvinToCelcius(main?.temp_min);
  const maxTemp = kelvinToCelcius(main?.temp_max);

  const { main: weatherMain, description } = weather[0];
  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  return (
    <div
      className="pt-6 pb-5 px-4 border rounded-lg flex flex-col 
    justify-between dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt2 flex items-center gap-1 font-bold">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <p className="py-6 text-9xl font-bold text-center">{temp}°</p>
      <div>
        <div>
          <span>{getIcon()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex gap-2 items-center">
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
