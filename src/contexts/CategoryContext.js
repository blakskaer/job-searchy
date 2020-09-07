import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const [categories, setCategories] = useState([
    { name: "IT and Telecommunications", qt: 4440, id: uuid(), checked: false },
    { name: "Sales and Commerce", qt: 3062, id: uuid(), checked: false },
  ]);

  // <CatagoryContext.Provider>
  //   {props.children}
  // </CatagoryContext.Provider>
  return <>{props.children}</>;
};

export default CategoryContextProvider;
