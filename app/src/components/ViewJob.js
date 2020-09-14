import React from "react";
import {connect} from "react-redux";
import {Container, Button, Image} from "semantic-ui-react";

const ViewJob = (props) => {
  return (
    <Container>
      <div>
        {props.jobs.company_logo ? (
          <Image floated="right" size="small" src={props.jobs.company_logo} />
        ) : (
          <Button
            circular
            floated="right"
            icon="briefcase"
            disabled
            color="black"
          />
        )}
        <p>{props.jobs.title}</p>
        <p>{props.jobs.company}</p>
        <p> {props.jobs.location} </p>
        <p> {props.jobs.type}</p>
        <p>{props.jobs.description}</p>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps)(ViewJob);
