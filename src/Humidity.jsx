import { Card } from "react-bootstrap";
import { WiHumidity } from "react-icons/wi";

export default function Humidity({ weather }) {
  return (
    <>
      <Card border="light">
        <div>
          <Card.Text>
            <span className="" style={{ fontSize: "16px" }}>
              <WiHumidity /> Humidity
            </span>
          </Card.Text>
        </div>
        <div>
          <Card.Text>
            <span>{weather.current.humidity}%</span>
          </Card.Text>
        </div>
      </Card>
    </>
  );
}
