import React from "react";
import {connect} from "react-redux";
import {Container, Button, Image} from "semantic-ui-react";

const ViewJob = (props) => {
  return (
    <Container>
      {props.jobs.map((job) => (
        <div>
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

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps)(ViewJob);
