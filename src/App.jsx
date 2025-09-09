import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Card } from "react-bootstrap";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import LocationName from "./LocationName";
import WeatherDetails from "./WeatherDetails";

function App() {
  const [weather, setWeather] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");

  // const url = `https://api.weatherapi.com/v1/current.json?key=0999908ae43e4175b9e62256250909&q=${searchLocation}&aqi=no`;

  useEffect(() => {
    if (!searchLocation) return; // don’t fetch if empty

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=0999908ae43e4175b9e62256250909&q=${searchLocation}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [searchLocation]);
  console.log(weather);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card
          style={{ width: "30rem", borderRadius: "20px" }}
          bg="light"
          border="light"
        >
          <Card.Body className="justify-content-center">
            <Card
              style={{ width: "28rem", borderRadius: "20px" }}
              bg="light"
              border="secondary"
            >
              <Card.Body className="">
                <div className="text-center mb-3">
                  <Header />
                </div>
                <div className="mb-2">
                  <WeatherCard weather={weather} />
                </div>
                <div className="text-center text-secondary mb-5">
                  <LocationName weather={weather} />
                </div>
                <div className="text-center text-secondary mb-5">
                  <WeatherDetails weather={weather} />
                </div>
                <SearchBar
                  searchLocation={searchLocation}
                  setSearchLocation={setSearchLocation}
                />
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
