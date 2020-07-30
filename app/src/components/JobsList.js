import React from "react";
import {Button, Card, Image} from "semantic-ui-react";

const JobsList = (props) => {
  return (
    <Card.Group centered>
      {props.jobs.map((job) => (
        <Card key={job.id}>
          <Card.Content>
            <Image floated="right" size="tiny" src={job.company_logo} />
            <Card.Header>{job.title}</Card.Header>
            <Card.Meta>
              <p>{job.company}</p>
              <span floated="right">{job.location}</span> <br />
              {job.type}
            </Card.Meta>
            {/* <Card.Description>{job.description}</Card.Description> */}
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => window.open(job.url)}>view job</Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default JobsList;
