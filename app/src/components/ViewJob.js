import React from "react";
import {connect} from "react-redux";
import {Button, Card, Image} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";
import Job from "./Job";

const ViewJob = (props) => {
  return (
    <Card.Group centered>
      {props.jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Card.Group>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps)(ViewJob);
