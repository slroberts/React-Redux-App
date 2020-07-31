import React, {useState} from "react";
import {connect} from "react-redux";
import {searchJobsData} from "../actions";

import {Form, Grid, Button} from "semantic-ui-react";

const SearchJobsForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (searchTerm.length > 0) {
    props.searchJobsData(searchTerm);
    // }

    setSearchTerm("");
  };

  return (
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
            Search Jobs
          </Button>
        </Grid.Column>
      </Grid>
    </Form>
  );
};

export default connect(null, {searchJobsData})(SearchJobsForm);
