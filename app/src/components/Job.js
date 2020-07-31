import React from "react";

import {connect} from "react-redux";
import {saveJob, unsaveJob} from "../actions";

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
        <Button onClick={() => window.open(props.job.url)}>View Job</Button>
        {props.isSaved ? (
          <Button onClick={() => props.unsaveJob(props.job)}>Unsave</Button>
        ) : (
          <Button onClick={() => props.saveJob(props.job)}>Save Job</Button>
        )}

        {console.log(props.isSaved)}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    isSaved: state.isSaved,
  };
};

export default connect(mapStateToProps, {saveJob, unsaveJob})(Job);
