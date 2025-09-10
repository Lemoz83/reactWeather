import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Card } from "react-bootstrap";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import LocationName from "./LocationName";
import WeatherDetails from "./WeatherDetails";

function App() {
  const [weather, setWeather] = useState(null); // null instead of []
  const [searchLocation, setSearchLocation] = useState("");
  const [error, setError] = useState(""); // for handling errors

  useEffect(() => {
    if (!searchLocation) return; // don’t fetch if empty

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=0999908ae43e4175b9e62256250909&q=${searchLocation}&aqi=no`
        );

        if (!response.ok) {
          throw new Error("Network response not ok");
        }

        const data = await response.json();
        if (data.error) {
          setError("No location found");
          setWeather(null);
        } else {
          setError("");
          setWeather(data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();

    // fetch(
    //   `https://api.weatherapi.com/v1/current.json?key=0999908ae43e4175b9e62256250909&q=${searchLocation}&aqi=no`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.error) {
    //       setError("No Location Found..");
    //       setWeather(null);
    //     } else {
    //       setError("");
    //       setWeather(data);
    //     }
    //   })
    //   .catch(() => setError("Something went wrong!"));
  }, [searchLocation]);

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{ backgroundColor: "#e0f7fa", minHeight: "100vh" }}
      >
        <Card
          style={{ width: "30rem", borderRadius: "20px" }}
          bg="light"
          border="light"
          className="shadow-lg"
        >
          <Card.Body className="justify-content-center">
            <Card
              style={{ width: "28rem", borderRadius: "20px" }}
              bg="light"
              border="secondary"
            >
              <Card.Body>
                <div className="text-center mb-3">
                  <Header />
                </div>

                <SearchBar
                  searchLocation={searchLocation}
                  setSearchLocation={setSearchLocation}
                />

                {/* Error Handling */}
                {error && (
                  <h5 className="text-muted text-center mt-4">{error}</h5>
                )}

                {/* Weather Content */}
                {weather && !error && (
                  <>
                    <div className="mb-2 mt-5">
                      <WeatherCard weather={weather} />
                    </div>
                    <div className="text-center text-secondary mb-5">
                      <LocationName weather={weather} />
                    </div>
                    <div className="text-center text-secondary mb-5">
                      <WeatherDetails weather={weather} />
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
