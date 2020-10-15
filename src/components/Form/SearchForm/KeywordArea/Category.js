import React from "react";

const Category = ({ name, quantity, toggleChecked, checked, id }) => {
  return (
    <div>
      <form>
        <input type="checkbox" checked={checked} id={id} onChange={e => toggleChecked(e.target.id)} />
        <label htmlFor={name}>
          {name} ({quantity})
        </label>
      </form>
    </div>
  );
};

export default Category;
