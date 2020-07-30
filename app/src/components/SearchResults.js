import React from "react";
import Job from "./Job";
import {Card} from "semantic-ui-react";

const SearchResults = (props) => {
  return (
    <Card.Group centered>
      {props.searchResults.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Card.Group>
  );
};

export default SearchResults;
