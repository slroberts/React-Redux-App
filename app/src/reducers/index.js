import {
  FETCHING_JOBS_START,
  FETCHING_JOBS_SUCCESS,
  FETCHING_JOBS_ERROR,
  SAVE_JOB,
  UNSAVE_JOB,
} from "../actions";

const initialState = {
  isFetching: false,
  jobs: [],
  error: "",
  savedJobs: [],
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOBS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jobs: action.payload,
        error: "",
      };
    case FETCHING_JOBS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case SAVE_JOB:
      const newArr = state.jobs.map((job) => {
        if (job.id === action.payload.id) {
          return {
            ...job,
            isSaved: true,
          };
        } else {
          return job;
        }
      });
      return {
        ...state,
        savedJobs: newArr.filter((job) => job.id === action.payload.id),
        jobs: newArr.filter((job) => job.id !== action.payload.id),
      };
    case UNSAVE_JOB:
      return {
        ...state,
        savedJobs: state.savedJobs.filter(
          (job) => job.id !== action.payload.id
        ),
        jobs: [...state.jobs, action.payload],
      };
    default:
      return state;
  }
};
