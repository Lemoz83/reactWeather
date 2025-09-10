import { Card } from "react-bootstrap";
import { FaCloudRain } from "react-icons/fa6";

export default function Precip({ weather }) {
  return (
    <>
      <Card border="light">
        <div>
          <Card.Text>
            <span className="" style={{ fontSize: "16px" }}>
              <FaCloudRain /> Precipitation
            </span>
          </Card.Text>
        </div>
        <div>
          <Card.Text>
            <span>{weather.current.precip_mm} mm</span>
          </Card.Text>
        </div>
      </Card>
    </>
  );
}
