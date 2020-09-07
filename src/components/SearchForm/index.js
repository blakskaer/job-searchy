import React from "react";
import styled from "styled-components";

import FormContextProvider from "../../contexts/CategoryContext";
import SubmitButton from "./SubmitButton";

const StyledBody = styled.body`
  width: 984px;
  hight: 400px;
  background-image: url ("../images/man-in-cafe-with-laptop.jpg");
`;

function SearchForm() {
  return (
    <StyledBody>
      <FormContextProvider>
        <SubmitButton />
      </FormContextProvider>
    </StyledBody>
  );
}

export default SearchForm;
