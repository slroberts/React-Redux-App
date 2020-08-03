import React, {useState} from "react";
import {connect} from "react-redux";
import {searchJobsData} from "../actions";

import {Form, Grid, Button, Header} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";

const SearchJobsForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.searchJobsData(searchTerm);

    setSearchTerm("");
  };

  return (
    <div>
      <Header as="h2" textAlign="center" style={{marginBottom: "4rem"}}>
        Find the job that match your skills
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

export default connect(null, {searchJobsData})(SearchJobsForm);
