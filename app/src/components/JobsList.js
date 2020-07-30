import React from "react";
import Job from "./Job";
import {Card} from "semantic-ui-react";

const JobsList = (props) => {
  return (
    <Card.Group centered>
      {props.jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Card.Group>
  );
};

export default JobsList;
