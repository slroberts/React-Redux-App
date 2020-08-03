import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {saveJob, unsaveJob} from "../actions";

import {Button, Card, Image} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";

const Job = (props) => {
  return (
    <Card>
      <Card.Content>
        {props.job.company_logo ? (
          <Image floated="right" size="tiny" src={props.job.company_logo} />
        ) : (
          <Button
            circular
            floated="right"
            icon="briefcase"
            disabled
            color="black"
          />
        )}
        <Card.Header>{props.job.title}</Card.Header>
        <Card.Meta>
          {/* <p>{job.company}</p> */}
          {props.job.location} <br />
          {props.job.type}
        </Card.Meta>
        {/* <Card.Description>{job.description}</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        {/* <Button onClick={() => window.open(props.job.url)} size="small"> */}
        <Button size="small">
          <Link to={"/job-post"}>
            <Icon name="eye" /> View Job
          </Link>
        </Button>
        {props.isSaved ? (
          <Button
            onClick={() => props.unsaveJob(props.job)}
            floated="right"
            negative
            size="small"
          >
            <Icon name="minus" /> Unsave
          </Button>
        ) : (
          <Button
            onClick={() => props.saveJob(props.job)}
            floated="right"
            size="small"
          >
            <Icon name="add" /> Save Job
          </Button>
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
