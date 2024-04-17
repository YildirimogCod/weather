"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [foreCast, setforeCast] = useState({});
  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
      setforeCast(res.data);
    } catch (error) {
      console.log("Error fetching weather data", error.message);
    }
  };
  useEffect(() => {
    fetchForecast();
  }, []);
  return (
    <GlobalContext.Provider value={{ foreCast }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
