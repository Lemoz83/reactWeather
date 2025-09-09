import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Card } from "react-bootstrap";

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
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, [searchLocation]);

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ minHeight: "calc(100vh - 70px)", marginTop: "80px" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <SearchBar
              searchLocation={searchLocation}
              setSearchLocation={setSearchLocation}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
