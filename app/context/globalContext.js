"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [foreCast, setforeCast] = useState({});
  const [airQuality, setAirQuality] = useState({});
  const [fiveDaysForecast, setFiveDaysForecast] = useState({});
  const [uvIndex, setUvIndex] = useState({});
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
  const fetchFiveDaysForecast = async () => {
    try {
      const res = await axios.get("api/fivedays");
      console.log("fivedays", res.data);
      setFiveDaysForecast(res.data);
    } catch (error) {
      console.log("Error fetching five days forecast data", error.message);
    }
  };
  const fetchUvIndex = async () => {
    try {
      const res = await axios.get("/api/uv");
      setUvIndex(res.data);
    } catch (error) {
      console.log("Error fetching uv index data", error.message);
    }
  };
  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
    fetchFiveDaysForecast();
    fetchUvIndex();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ foreCast, airQuality, fiveDaysForecast, uvIndex }}
    >
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
