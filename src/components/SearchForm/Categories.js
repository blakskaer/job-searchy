import React, { useContext } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";

const Categories = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return <div key={category}>{category}</div>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
