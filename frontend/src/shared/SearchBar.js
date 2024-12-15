import React, { useRef } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import "./searchbar.css";

const SearchBar = () => {
  const locationRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;

    if (location === "") {
      return alert("All field are required");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?country=${location}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(`/tours/search?country=${location}`, { state: result.data });
  };

  return (
    <div className="search_bar-container">
      <div>
        <input
          type="text"
          placeholder="Destination Country"
          className="search_input"
          ref={locationRef}
        />
      </div>
      <div>
        <Button className="search" onClick={searchHandler}>
          <i className="ri-search-line"></i>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
