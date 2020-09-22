import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useParams } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import JobsList from './components/JobsList';
import SavedJobs from './components/SavedJobs';
import ViewJob from './components/ViewJob';

import { Container, Loader, Message } from 'semantic-ui-react';
import { viewJob } from './actions';

const App = ({ jobs, savedJobs, isFetching }) => {
  const { id } = useParams();
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/saved-jobs">
          {savedJobs.length > 0 ? (
            <SavedJobs savedJobs={savedJobs} />
          ) : (
            <Container>
              <Message size="large" color="blue" centered>
                No saved jobs.
              </Message>
            </Container>
          )}
        </Route>

        <Route exact path={`/job/:id`}>
          {isFetching ? (
            <Loader active inline="centered" />
          ) : (
            <ViewJob jobs={jobs} id={id} />
          )}
        </Route>
      </Switch>

      <Route exact path="/">
        <Hero />
        <Container>
          {isFetching ? (
            <Loader active inline="centered" />
          ) : (
            <JobsList jobs={jobs} />
          )}
        </Container>
      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('SR : saveJobs : ', state.savedJobs);
  return {
    isFetching: state.isFetching,
    jobs: state.jobs,
    error: state.error,
    savedJobs: state.savedJobs,
  };
};
export default connect(mapStateToProps, { viewJob })(App);
