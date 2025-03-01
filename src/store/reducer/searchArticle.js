import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../action/actionTypes";

const defaultState = {
  results: [], // Renamed key for uniqueness
  searchTerm: "", // Changed 'query' to 'searchTerm'
  isLoading: false, // Changed 'loading' to 'isLoading'
  error: null, // Added default error state
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload.articles, 
        searchTerm: action.payload.query,
        isLoading: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload, // Ensured error state consistency
      };
    case SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null, // Reset error on new request
      };
    default:
      return state;
  }
};

export default searchReducer;
