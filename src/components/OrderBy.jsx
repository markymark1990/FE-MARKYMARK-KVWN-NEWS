import React from "react";

const OrderBy = ({ orderBy, setOrderBy }) => {
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <div>
      <label className="sort-by-title">Order By:</label>
      <select value={orderBy} onChange={handleOrderChange}>
        <option value="desc" >Descending</option>
        <option value="asc" >Ascending</option>
      </select>
    </div>
  );
};

export default OrderBy;
