import React, {useState} from "react";
import {connect} from "react-redux";
import {fetchJobsData} from "../actions";

import {Form, Grid, Button, Header, Icon} from "semantic-ui-react";

const SearchJobsForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.fetchJobsData(searchTerm);

    setSearchTerm("");
  };

  return (
    <div>
      <Header
        as="h2"
        textAlign="center"
        style={{marginBottom: "3rem", fontSize: "1.9rem", color: "white"}}
      >
        Find the job that matches your skills
      </Header>
      <Form onSubmit={handleSubmit}>
        <Grid centered stackable columns={2}>
          <Grid.Column tablet={12} computer={5}>
            <Form.Input
              name="searchInput"
              value={searchTerm}
              onChange={handleChange}
            />
          </Grid.Column>
          <Grid.Column tablet={12} computer={3}>
            <Button color="teal" style={{width: "100%"}}>
              <Icon name="search" /> Search Jobs
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </div>
  );
};

export default connect(null, {fetchJobsData})(SearchJobsForm);
