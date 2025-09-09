import { Card } from "react-bootstrap";
import { FaWind } from "react-icons/fa";

export default function Wind({ weather }) {
  return (
    <>
      <Card border="light">
        <Card.Text>
          <div>
            <span className="" style={{ fontSize: "16px" }}>
              <FaWind /> Wind
            </span>
          </div>
          <div>
            <span>{weather.current.wind_kph} km/hr</span>
          </div>
        </Card.Text>
      </Card>
    </>
  );
}
