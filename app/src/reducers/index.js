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
  jobs: [
    {
      id: "9999f1f0-e448-11e8-966e-602e38acf303",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/9999f1f0-e448-11e8-966e-602e38acf303",
      created_at: "Fri Nov 09 21:36:14 UTC 2018",
      company: "BlueVine",
      company_url: "http://bluevine.com",
      location: "Redwood City, Ca",
      title: "Senior Python Developer",
      description:
        "At BlueVine, we’re transforming how businesses get access to working capital financing. Founded in 2013, our online lending platform has helped 10,000+ business owners simplify their cashflow management, boost growth, and take advantage of new opportunities. As a leading FinTech company, we’re backed by Menlo Ventures, LightSpeed Ventures, 83North, Silicon Valley Bank, Citi Ventures, Microsoft Ventures and Nationwide Insurance among other notable investors. Our clients love us, the market we’re going after is huge, and we’re just getting started.",
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVpXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8b6025c5a6fe7b1fcfa4d8ead233a6ef0e956a5a/98456b19-f8cb-4e7c-863d-6dafefc20196",
    },
  ],
  error: "",
  searchResults: [],
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
        searchResults: action.payload,
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
