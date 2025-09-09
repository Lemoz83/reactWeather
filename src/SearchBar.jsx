import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function SearchBar({ searchLocation, setSearchLocation }) {
  function handleSearch(e) {
    e.preventDefault();
    if (!searchLocation || searchLocation.trim() === "") return;
    console.log(searchLocation); // do something with it
    setSearchLocation(""); // clear input after submit
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter Location"
            onChange={(e) => setSearchLocation(e.target.value)}
            value={searchLocation}
          ></Form.Control>
          <Button
            type="submit"
            variant="primary"
            onClick={(e) => handleSearch(e)}
            className="btn"
          >
            search
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
