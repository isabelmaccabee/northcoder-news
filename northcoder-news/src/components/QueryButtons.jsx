import React from "react";

const QueryButtons = ({ addQueries }) => {
  const handleClick = () => {};

  return (
    <div>
      <form>
        <label htmlFor="sortByDropdown">Sort by:</label>
        <select id="sortByDropdown">
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comments">Comments</option>
        </select>
        <button onClick={handleClick} />
      </form>
    </div>
  );
};

export default QueryButtons;
