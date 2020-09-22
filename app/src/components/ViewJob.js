import React from 'react';
import { Container, Button, Image } from 'semantic-ui-react';

const ViewJob = ({ jobs }) => {
  return (
    <Container>
      {jobs.map((job) => (
        <div key={job.id}>
          {job.company_logo ? (
            <Image floated="right" size="small" src={job.company_logo} />
          ) : (
            <Button
              circular
              floated="right"
              icon="briefcase"
              disabled
              color="black"
            />
          )}
          <p>{job.title}</p>
          <p>{job.company}</p>
          <p> {job.location} </p>
          <p> {job.type}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </Container>
  );
};

export default ViewJob;
