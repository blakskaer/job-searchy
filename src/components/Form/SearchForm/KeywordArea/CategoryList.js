import React, { useContext } from "react";

import { FormContext } from "../../../../contexts/FormContext";
import Category from "./Category";
import { TOGGLE_CAT } from "../../../../constants";

const CategoryList = () => {
  const { state, dispatch } = useContext(FormContext);

  const toggleChecked = id => {
    dispatch({
      type: TOGGLE_CAT,
      payload: id
    });
  };

  const topCat = state.allCategories.filter(category => category.top === true);
  const moreCat = state.allCategories.filter(category => category.top === false);

  return (
    <div>
      <h4>Top Categories</h4>
      {topCat.map(category => (
        <Category
          name={category.title}
          quantity={category.qt}
          key={category.id}
          id={category.id}
          checked={category.checked}
          toggleChecked={toggleChecked}
        />
      ))}
      <h4>More Categories</h4>
      {moreCat.map(category => (
        <Category
          name={category.title}
          quantity={category.qt}
          key={category.id}
          id={category.id}
          checked={category.checked}
          toggleChecked={toggleChecked}
        />
      ))}
    </div>
  );
};
export default CategoryList;
