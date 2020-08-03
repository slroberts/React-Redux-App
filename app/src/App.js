import React from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";

import {fetchJobsData} from "../src/actions";

import NavBar from "./components/NavBar";
import SearchJobsForm from "./components/SearchJobsForm";
import JobsList from "./components/JobsList";
import SearchResults from "./components/SearchResults";
import SavedJobs from "./components/SavedJobs";
import ViewJob from "./components/ViewJob";

import {
  Loader,
  Container,
  Grid,
  Divider,
  Button,
  Message,
} from "semantic-ui-react";

import {Icon} from "semantic-ui-react";

const App = (props) => {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/saved-jobs">
          {props.savedJobs.length > 0 ? (
            <SavedJobs savedJobs={props.savedJobs} />
          ) : (
            <Message size="large" color="blue" centered>
              No saved jobs.
            </Message>
          )}
        </Route>

        <Route exact path={"/job-post"}>
          <ViewJob />
        </Route>
      </Switch>

      <Route exact path="/">
        <SearchJobsForm />

        <Grid centered>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Divider horizontal>Or</Divider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Button
                color="black"
                style={{width: "100%", marginBottom: "4rem"}}
                onClick={() => props.fetchJobsData()}
              >
                <Icon name="box" /> List All Jobs
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <SearchResults searchResults={props.searchResults} />

        {props.isFetching ? (
          <Loader active inline="centered" />
        ) : (
          <JobsList jobs={props.jobs} />
        )}
      </Route>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    jobs: state.jobs,
    error: state.error,
    searchResults: state.searchResults,
    savedJobs: state.savedJobs,
  };
};
export default connect(mapStateToProps, {fetchJobsData})(App);
