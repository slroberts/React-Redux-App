import React from "react";
import {connect} from "react-redux";

import {fetchJobsData} from "./actions";

import SearchJobsForm from "./components/SearchJobsForm";
import JobsList from "./components/JobsList";
import SearchResults from "./components/SearchResults";

const App = (props) => {
  return (
    <div>
      <h1>Developer's Hub</h1>

      <SearchJobsForm />
      <SearchResults searchResults={props.searchResults} />

      {props.isFetching ? <p>loading...</p> : <JobsList jobs={props.jobs} />}

      <button onClick={() => props.fetchJobsData()}>List all jobs</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    jobs: state.jobs,
    error: state.error,
    searchResults: state.searchResults,
  };
};
export default connect(mapStateToProps, {fetchJobsData})(App);
