import React, {useState} from "react";
import {connect} from "react-redux";
import {searchJobsData} from "../actions";

const SearchJobsForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm({
      searchTerm: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.searchJobsData(searchTerm.searchTerm);

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
