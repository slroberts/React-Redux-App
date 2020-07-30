import React from "react";
import {Button, Card, Image} from "semantic-ui-react";

const SearchResults = (props) => {
  return (
    <Card.Group centered>
      {props.searchResults.map((job) => (
        <Card key={job.id}>
          <Card.Content>
            <Image floated="right" size="tiny" src={job.company_logo} />
            <Card.Header>{job.title}</Card.Header>
            <Card.Meta>
              <p>{job.company}</p>
              <p floated="right">{job.location}</p> <br />
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

export default SearchResults;
