import React from "react";
import styled from "styled-components";

import SearchForm from "../SearchForm";
import img from "../../../assets/images/man-in-cafe-with-laptop.jpg";

const StyledWrapper = styled.div`
  width: 984px;
  height: 400px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
`;
const StyledOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(6, 134, 140, 0.6);
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  color: #ffffff;
`;

function FormWrapper() {
  return (
    <>
      <StyledWrapper>
        <StyledOverlay>
          <StyledTitle>For a better working life</StyledTitle>
          <StyledTitle>The new THING jobs</StyledTitle>
          <SearchForm />
        </StyledOverlay>
      </StyledWrapper>
    </>
  );
}

export default FormWrapper;
