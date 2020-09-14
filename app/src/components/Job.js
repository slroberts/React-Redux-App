import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {saveJob, unsaveJob} from "../actions";

import {Button, Card, Image, Icon} from "semantic-ui-react";

const Job = ({job, saveJob, unsaveJob}) => {
  return (
    <Card>
      <Card.Content>
        {job.company_logo ? (
          <Image floated="right" size="tiny" src={job.company_logo} />
        ) : (
          <Button
            circular
            floated="right"
            icon="briefcase"
            disabled
            color="black"
          />
        )}
        <Card.Header>{job.title}</Card.Header>
        <Card.Meta>
          {job.location} <br />
          {job.type}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button size="small">
          <Link to={"/job-post"}>
            <Icon name="eye" /> View Job
          </Link>
        </Button>
        {job.isSaved ? (
          <Button
            onClick={() => unsaveJob(job)}
            floated="right"
            negative
            size="small"
          >
            <Icon name="minus" /> Unsave
          </Button>
        ) : (
          <Button onClick={() => saveJob(job)} floated="right" size="small">
            <Icon name="add" /> Save Job
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default connect(null, {saveJob, unsaveJob})(Job);
