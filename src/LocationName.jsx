export default function LocationName({ weather }) {
  if (!weather || !weather.current) {
    return null; // no data yet
  }

  // Convert localtime string to Date
  const localDate = new Date(weather.location.localtime);

  // Format like "Fri, 27 Sep"
  const formattedDate = localDate.toLocaleDateString("en-GB", {
    weekday: "short", // Fri
    day: "2-digit", // 27
    month: "short", // Sep
  });
  // Time part → 12:45 PM
  const formattedTime = localDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // 12-hour clock with AM/PM, remove for 24h format
  });
  return (
    <>
      <h5>
        {weather.location.name},{weather.location.country}
      </h5>
      <span className="ms-3" style={{ fontSize: "16px" }}>
        {formattedDate} {formattedTime}
      </span>
    </>
  );
}
