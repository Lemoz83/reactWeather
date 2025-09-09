import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather || !weather.current) {
    return null; // no data yet
  }

  return (
    <div
      className="p-2"
      style={{ borderRadius: "20px", maxWidth: "300px", margin: "0 auto" }}
    >
      <div className="d-flex justify-content-center ">
        <div className="row">
          <div className="col-12">
            <h1 className="display-2 mb-0" style={{ fontWeight: 500 }}>
              {weather.current.temp_c}°C
            </h1>
          </div>
          <div className="col-12">
            <h4 className="text-muted fs-8 mt-2">
              {weather.current.condition.text}
            </h4>
          </div>
        </div>

        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="ms-3"
          style={{ width: "120px", height: "120px" }}
        />
      </div>
    </div>
  );
}
