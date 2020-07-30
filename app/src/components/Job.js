import React from "react";
import {Button, Card, Image} from "semantic-ui-react";

const Job = (props) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="tiny" src={props.job.company_logo} />
        <Card.Header>{props.job.title}</Card.Header>
        <Card.Meta>
          {/* <p>{job.company}</p> */}
          {props.job.location} <br />
          {props.job.type}
        </Card.Meta>
        {/* <Card.Description>{job.description}</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <Button onClick={() => window.open(props.job.url)}>view job</Button>
      </Card.Content>
    </Card>
  );
};

export default Job;
