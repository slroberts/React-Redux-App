import React from "react";
import Job from "./Job";
import {Card} from "semantic-ui-react";

const SavedJobs = (props) => {
  return (
    <Card.Group centered>
      {props.savedJobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Card.Group>
  );
};

export default SavedJobs;
