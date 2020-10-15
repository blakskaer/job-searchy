import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { FormContext } from "../../../contexts/FormContext";
import { SET_LOCATION } from "../../../constants";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
`;
const StyledButton = styled.button`
  float: left;
`;
const SubmitButton = styled.button`
  background: #ddff00;
`;

const LocationArea = () => {
  const {
    state: { keyword, location },
    dispatch
  } = useContext(FormContext);

  const [locationList, setLocationList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = async input => {
    dispatch({ type: SET_LOCATION, payload: input });
    if (input.length > 2) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=DE&q=${input}`;
      const response = await axios(proxyurl + url);
      let locationList = [];
      for (let loc of response.data.split('"')) {
        if (loc.length > 3) {
          locationList.push(loc);
        }
      }
      setShowDropdown(true);
      setLocationList(locationList);
    }
  };

  const handleClick = (e, city) => {
    e.preventDefault();
    dispatch({ type: SET_LOCATION, payload: city });
    setShowDropdown(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted. Location:", location, " keyword:", keyword, " and categories checked:");
  };

  return (
    <>
      <input type="text" placeholder="Location" value={location} onChange={e => handleChange(e.target.value)} />
      {showDropdown && (
        <StyledUl>
          {locationList.map(city => (
            <StyledButton key={city} onClick={e => handleClick(e, city)}>
              {city}
            </StyledButton>
          ))}
        </StyledUl>
      )}
      <SubmitButton onClick={handleSubmit}>Search</SubmitButton>
    </>
  );
};

export default LocationArea;
