import { Card } from "react-bootstrap";
import { FaWind } from "react-icons/fa";

export default function Wind({ weather }) {
  return (
    <>
      <Card border="light">
        <div>
          <Card.Text>
            <span className="" style={{ fontSize: "16px" }}>
              <FaWind /> Wind
            </span>
          </Card.Text>
        </div>
        <div>
          <Card.Text>
            <span>{weather.current.wind_kph} km/hr</span>
          </Card.Text>
        </div>
      </Card>
    </>
  );
}
