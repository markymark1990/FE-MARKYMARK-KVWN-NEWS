import React from "react";

const OrderBy = ({ orderBy, setOrderBy }) => {
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <div>
      <label className="sort-by-title">Order By:</label>
      <select value={orderBy} onChange={handleOrderChange}>
        <option value="desc" className="sort-controls select">Descending</option>
        <option value="asc" className="sort-controls select">Ascending</option>
      </select>
    </div>
  );
};

export default OrderBy;
