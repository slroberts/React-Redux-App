import React from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import JobsList from "./components/JobsList";
import SavedJobs from "./components/SavedJobs";
import ViewJob from "./components/ViewJob";

import {Container, Loader, Message} from "semantic-ui-react";

const App = (props) => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/saved-jobs">
          {props.savedJobs.length > 0 ? (
            <SavedJobs savedJobs={props.savedJobs} />
          ) : (
            <Container>
              <Message size="large" color="blue" centered>
                No saved jobs.
              </Message>
            </Container>
          )}
        </Route>

        <Route exact path={"/job-post"}>
          <ViewJob />
        </Route>
      </Switch>

      <Route exact path="/">
        <Hero />
        <Container>
          {props.isFetching ? (
            <Loader active inline="centered" />
          ) : (
            <JobsList jobs={props.jobs} />
          )}
        </Container>
      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    jobs: state.jobs,
    error: state.error,
    savedJobs: state.savedJobs,
  };
};
export default connect(mapStateToProps)(App);
