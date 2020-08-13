import React from "react";
import {connect} from "react-redux";
import {fetchJobsData} from "../actions";

import SearchJobsForm from "./SearchJobsForm";
import {Container, Grid, Divider, Button, Icon} from "semantic-ui-react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-position: center;
  height: 460px;
  padding-top: 8rem;
  margin-bottom: 4rem;
`;

const Hero = (props) => {
  return (
    <HeroContainer>
      <Container>
        <SearchJobsForm />

        <Grid centered>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Divider
                horizontal
                style={{
                  color: "white",
                  marginTop: "2rem",
                }}
              >
                Or
              </Divider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Button
                color="orange"
                style={{width: "100%", marginBottom: "4rem"}}
                onClick={() => props.fetchJobsData("")}
              >
                <Icon name="box" /> List All Jobs
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default connect(null, {fetchJobsData})(Hero);
