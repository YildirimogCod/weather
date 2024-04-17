"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import { kelvinToCelcius } from "@/app/utils/misc";
import { useState } from "react";
import {
  clearSky,
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
} from "@/app/utils/Icon";
const Temperature = () => {
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  const { foreCast } = useGlobalContext();
  const { main, timezone, name, weather } = foreCast;

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

  switch (weather) {
  }
  return (
    <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
    </div>
  );
};

export default Temperature;
