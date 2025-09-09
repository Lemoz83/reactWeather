import { Card } from "react-bootstrap";
import { FaCloudRain } from "react-icons/fa6";

export default function Precip({ weather }) {
  return (
    <>
      <Card border="light">
        <Card.Text>
          <div>
            <span className="" style={{ fontSize: "16px" }}>
              <FaCloudRain /> Precipitation
            </span>
          </div>
          <div>
            <span>{weather.current.precip_mm} mm</span>
          </div>
        </Card.Text>
      </Card>
    </>
  );
}
