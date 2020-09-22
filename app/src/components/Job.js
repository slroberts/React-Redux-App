import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { viewJob, saveJob, unsaveJob } from '../actions';

import { Button, Card, Image, Icon } from 'semantic-ui-react';

const Job = ({ job, viewJob, saveJob, unsaveJob, match }) => {
  const { push } = useHistory();

  const handleViewJob = (id) => {
    viewJob(id);
    push(`/job/${id}`);
    console.log(id);
  };

  return (
    <>
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
          <Button size="small" onClick={() => handleViewJob(job.id)}>
            <Icon name="eye" /> View Job
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
    </>
  );
};

export default connect(null, { viewJob, saveJob, unsaveJob })(Job);
