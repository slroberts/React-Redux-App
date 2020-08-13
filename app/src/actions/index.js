import axios from "axios";

export const FETCHING_JOBS_START = "FETCHING_JOBS_START";
export const FETCHING_JOBS_SUCCESS = "FETCHING_JOBS_SUCCESS";
export const FETCHING_JOBS_ERROR = "FETCHING_JOBS_ERROR";
export const SAVE_JOB = "SAVE_JOB";
export const UNSAVE_JOB = "UNSAVE_JOB";

const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

export const fetchJobsData = (searchTerm) => (dispatch) => {
  dispatch({type: FETCHING_JOBS_START});

  axios
    .get(`${URL}?description=${searchTerm}`)
    .then((res) => {
      console.log("SR: actions/index.js: fetchJobsData: axios.then: ", res);
      const newArr = res.data.map((job) => {
        return {
          ...job,
          isSaved: false,
        };
      });
      dispatch({
        type: FETCHING_JOBS_SUCCESS,
        payload: newArr,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: FETCHING_JOBS_ERROR, payload: err});
    });
};

export const saveJob = (jobId) => (dispatch) => {
  dispatch({type: SAVE_JOB, payload: jobId});
};

export const unsaveJob = (jobId) => (dispatch) => {
  dispatch({type: UNSAVE_JOB, payload: jobId});
};
