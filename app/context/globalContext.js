"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [foreCast, setforeCast] = useState({});
  const [airQuality, setAirQuality] = useState({});
  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
      setforeCast(res.data);
    } catch (error) {
      console.log("Error fetching weather data", error.message);
    }
  };
  const fetchAirQuality = async () => {
    try {
      const res = await axios.get("api/pollution");
      console.log(res.data);
      setAirQuality(res.data);
    } catch (error) {
      console.log("Error fetching air quality data", error.message);
    }
  };
  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
  }, []);
  return (
    <GlobalContext.Provider value={{ foreCast, airQuality }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
