import React from "react";

const JobsList = (props) => {
  return props.jobs.map((job) => (
    <div key={job.id}>
      <p>{job.company}</p>
      <img src={job.company_logo} alt={`${job.company} logo`} />
      <h2>{job.title}</h2>
      {job.description}
      <p>{job.location}</p>
      <p>{job.type}</p>
      <button onClick={(e) => window.open(job.url)}>view job</button>
    </div>

    //company
    //company_logo
    //company_url
    //created_at
    //description
    //how_to_apply
    //id
    //location
    //title
    //type
    //url
  ));
};

export default JobsList;
