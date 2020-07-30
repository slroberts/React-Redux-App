import React from "react";
import {connect} from "react-redux";

import {fetchJobsData} from "../src/actions";

import SearchJobsForm from "./components/SearchJobsForm";
import JobsList from "./components/JobsList";
import SearchResults from "./components/SearchResults";

import {
  Loader,
  Container,
  Header,
  Grid,
  Divider,
  Button,
} from "semantic-ui-react";

const App = (props) => {
  return (
    <Container>
      <Header as="h1" textAlign="center" style={{margin: "4rem 0"}}>
        Developer's Hub
      </Header>

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
              List All Jobs
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
    </Container>
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
