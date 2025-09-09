import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Precip from "./Precip";

export default function WeatherDetails({ weather }) {
  if (!weather || !weather.current) {
    return null; // no data yet
  }

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <Humidity weather={weather} />
      </div>
      <div className="col-4">
        <Wind weather={weather} />
      </div>
      <div className="col-4">
        <Precip weather={weather} />
      </div>
    </div>
  );
}
