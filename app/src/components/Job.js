import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {saveJob, unsaveJob} from "../actions";

import {Button, Card, Image, Icon} from "semantic-ui-react";

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
          {props.job.location} <br />
          {props.job.type}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button size="small">
          <Link to={"/job-post"}>
            <Icon name="eye" /> View Job
          </Link>
        </Button>
        {props.job.isSaved ? (
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
      </Card.Content>
    </Card>
  );
};

export default connect(null, {saveJob, unsaveJob})(Job);
