import React from 'react';
import Job from './Job';
import { Container, Card, Image } from 'semantic-ui-react';

const JobsList = ({ jobs }) => {
  return (
    <Container>
      {jobs.length === 0 ? (
        <>
          <Image
            centered
            size="large"
            src="https://opendoodles.s3-us-west-1.amazonaws.com/levitate.gif"
            style={{ opacity: 0.09 }}
          />
        </>
      ) : (
        <Card.Group centered>
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </Card.Group>
      )}
    </Container>
  );
};

export default JobsList;
