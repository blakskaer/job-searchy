import React, { createContext, useReducer } from "react";
import { formReducer, initialState } from "../reducers/FormReducer";

export const FormContext = createContext();

const FormContextProvider = props => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return <FormContext.Provider value={{ state, dispatch }}>{props.children}</FormContext.Provider>;
};

export default FormContextProvider;
