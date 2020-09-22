import React from 'react';
import Job from './Job';
import { Card } from 'semantic-ui-react';

const SavedJobs = ({ savedJobs }) => {
  return (
    <Card.Group>
      {savedJobs.map((job) => (
        <Job key={job.id} job={job[0]} />
      ))}
    </Card.Group>
  );
};

export default SavedJobs;
