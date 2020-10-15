import React, { useContext } from "react";

import { FormContext } from "../../../../contexts/FormContext";
import { KEYWORD_INPUT } from "../../../../constants";

const CatSearchField = () => {
  const { state, dispatch } = useContext(FormContext);

  const handleKeywordInput = keyword => {
    dispatch({
      type: KEYWORD_INPUT,
      payload: keyword
    });
  };

  return (
    <input value={state.keyword} type="text" placeholder="Enter keyword" onChange={e => handleKeywordInput(e.target.value)} />
  );
};

export default CatSearchField;
