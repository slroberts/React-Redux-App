import React from "react";
import Job from "./Job";
import {Container, Card, Image, Message} from "semantic-ui-react";

const JobsList = (props) => {
  return (
    <Container>
      {props.jobs.length === 0 ? (
        <>
          {/* <Message
            size="small"
            centered
            style={{textAlign: "center", opacity: 0.25, fontSize: "1.25rem"}}
          >
            Search Job Title or View All Jobs
          </Message> */}
          <Image
            centered
            size="large"
            src="https://opendoodles.s3-us-west-1.amazonaws.com/levitate.gif"
            style={{opacity: 0.09}}
          />
        </>
      ) : (
        <Card.Group centered>
          {props.jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </Card.Group>
      )}
    </Container>
  );
};

export default JobsList;
