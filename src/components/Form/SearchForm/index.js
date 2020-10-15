import React from "react";

import FormContextProvider from "../../../contexts/FormContext";
import KeywordArea from "./KeywordArea";
import LocationArea from "./LocationArea";

const SearchForm = () => {
  return (
    <FormContextProvider>
      <KeywordArea />
      <LocationArea />
    </FormContextProvider>
  );
};

export default SearchForm;
