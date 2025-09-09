import { Form, Button } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import "./App.css";

export default function SearchBar({ searchLocation, setSearchLocation }) {
  function handleSearch(e) {
    e.preventDefault();
    if (!searchLocation || searchLocation.trim() === "") return;
    // Do something with searchLocation here
    setSearchLocation(""); // clear input after submit
  }

  return (
    <Form onSubmit={handleSearch}>
      <div className="search-container">
        <Form.Control
          type="text"
          placeholder="Enter Location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="border-0 shadow-none"
        />
        <Button type="submit" variant="link" className="search-btn p-0">
          <FaSearchLocation size={20} />
        </Button>
      </div>
    </Form>
  );
}
