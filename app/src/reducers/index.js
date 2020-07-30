import {
  FETCHING_JOBS_START,
  FETCHING_JOBS_SUCCESS,
  FETCHING_JOBS_ERROR,
  SEARCH_JOBS_START,
  SEARCH_JOBS_SUCCESS,
  SEARCH_JOBS_ERROR,
} from "../actions";

const initialState = {
  isFetching: false,
  jobs: [],
  error: "",
  searchTerm: "",
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
    case SEARCH_JOBS_START:
      return {
        ...state,
        isFetching: true,
      };
    case SEARCH_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jobs: action.payload,
        error: "",
      };
    case SEARCH_JOBS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
