import React from "react";
import Job from "./Job";
import {Card} from "semantic-ui-react";

const SavedJobs = ({savedJobs}) => {
  return (
    <Card.Group>
      {savedJobs.map((job) => (
        <div key={Math.random()}>
          {job.map((j) => (
            <Job key={job.id} job={j} />
          ))}
        </div>
      ))}
    </Card.Group>
  );
};

export default SavedJobs;
