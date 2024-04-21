"use client";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

function FlyToActiveCity({ activeCityCords }: any) {
  const map = useMap();
  useEffect(() => {
    if (activeCityCords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo(
        [activeCityCords.lat, activeCityCords.lon],
        zoomLev,
        flyToOptions
      );
    }
  }, [activeCityCords, map]);

  return null;
}

export default FlyToActiveCity;
