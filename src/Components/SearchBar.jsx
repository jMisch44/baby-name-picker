import React from "react";

const SearchBar = (props) => {
  const { input, setInput, formSubmit } = props;

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Search Bar">Search Bar</label>
        <input
          type="text"
          value={input}
          id="Search Bar"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
