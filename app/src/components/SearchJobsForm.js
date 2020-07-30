import React, {useState} from "react";
import {connect} from "react-redux";
import {searchJobsData} from "../actions";

const SearchJobsForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    console.log("SR: handleChange: ", e.target.value);
    setSearchTerm({
      searchTerm: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("SR: handleChange: ", searchTerm);
    e.preventDefault();

    searchJobsData(searchTerm);

    setSearchTerm({
      searchTerm: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchInput"
        value={props.searchTerm}
        onChange={handleChange}
      />
      <button>Search Jobs</button>
    </form>
  );
};

export default connect(null, {searchJobsData})(SearchJobsForm);