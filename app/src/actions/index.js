import axios from "axios";

export const FETCHING_JOBS_START = "FETCHING_JOBS_START";
export const FETCHING_JOBS_SUCCESS = "FETCHING_JOBS_SUCCESS";
export const FETCHING_JOBS_ERROR = "FETCHING_JOBS_ERROR";
export const SEARCH_JOBS_START = "SEARCH_JOBS_START";
export const SEARCH_JOBS_SUCCESS = "SEARCH_JOBS_SUCCESS";
export const SEARCH_JOBS_ERROR = "SEARCH_JOBS_ERROR";

export const fetchJobsData = () => (dispatch) => {
  dispatch({type: FETCHING_JOBS_START});

  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node"
    )
    .then((res) => {
      console.log("SR: actions/index.js: fetchJobsData: axios.then: ", res);
      dispatch({
        type: FETCHING_JOBS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: FETCHING_JOBS_ERROR, payload: err.message});
    });
};

export const searchJobsData = (searchTerm) => (dispatch) => {
  dispatch({type: SEARCH_JOBS_START});
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchTerm}`
    )
    .then((res) => {
      dispatch({
        type: SEARCH_JOBS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: SEARCH_JOBS_ERROR, payload: err.message});
    });
};
