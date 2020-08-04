import React from "react";
import {connect} from "react-redux";

import SearchJobsForm from "./SearchJobsForm";
import {Container, Grid, Divider, Button, Icon} from "semantic-ui-react";

import {fetchJobsData} from "../actions";

const Hero = (props) => {
  return (
    <Container
      style={{
        backgroundColor: "#000",
        // background: "linear-gradient(#f67a36,#ed008c)",
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "460px",
        paddingTop: "8rem",
        marginBottom: "4rem",
      }}
      fluid
    >
      <Container>
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
      </Container>
    </Container>
  );
};

export default connect(null, {fetchJobsData})(Hero);
