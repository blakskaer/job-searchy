import React, { useState } from "react";
import styled from "styled-components";

import CatSearchField from "./CatSearchField";
import CategoryList from "./CategoryList";

// styles
const ButtonWrapper = styled.div`
  display: inline-block;
  height: 38px;
  flex-wrap: wrap;
`;

const CategoryArea = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      <CatSearchField />
      <ButtonWrapper>
        <button onClick={() => setShowCategories(!showCategories)}>in all categories</button>
      </ButtonWrapper>
      {showCategories && <CategoryList />}
    </>
  );
};

export default CategoryArea;
