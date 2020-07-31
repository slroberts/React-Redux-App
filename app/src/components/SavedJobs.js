import React from "react";
import Job from "./Job";

const SavedJobs = (props) => {
  return props.savedJobs.map((job) => <Job key={job.id} job={job} />);
};

export default SavedJobs;
