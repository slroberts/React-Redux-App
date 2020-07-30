import React from "react";
import {connect} from "react-redux";

import {fetchJobsData} from "./actions";

import SearchJobsForm from "./components/SearchJobsForm";
import JobsList from "./components/JobsList";
const App = (props) => {
  return (
    <div>
      <h1>Developer's Hub</h1>
      <button onClick={() => props.fetchJobsData()}>List all jobs</button>
      <SearchJobsForm searchTerm={props.searchTerm} />

      {props.isFetching ? <p>loading...</p> : <JobsList jobs={props.jobs} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    jobs: state.jobs,
    error: state.error,
    searchTerm: state.searchTerm,
  };
};
export default connect(mapStateToProps, {fetchJobsData})(App);
