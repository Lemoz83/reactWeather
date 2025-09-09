import { Card } from "react-bootstrap";
import { WiHumidity } from "react-icons/wi";

export default function Humidity({ weather }) {
  return (
    <>
      <Card border="light">
        <Card.Text>
          <div>
            <span className="" style={{ fontSize: "16px" }}>
              <WiHumidity /> Humidity
            </span>
          </div>
          <div>
            <span>{weather.current.humidity}%</span>
          </div>
        </Card.Text>
      </Card>
    </>
  );
}
