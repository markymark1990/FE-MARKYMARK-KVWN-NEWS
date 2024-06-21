import React from "react";

const SortBy = ({ sortBy, setSortBy }) => {
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <label>Sort By:</label>
      <select id="sort-by" value={sortBy} onChange={handleSortChange}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};

export default SortBy;
