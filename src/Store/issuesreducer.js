import {
  FETCH_ISSUES_ERROR,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
} from "./constants"

const initialState = {
  fetching: false,
  issues: [],
  error: null,
}

export default function issuesreducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ISSUES_SUCCESS:
      return { fetching: false, issues: action.issues, error: null }

    case FETCH_ISSUES_ERROR:
      return { fetching: false, issues: [], error: action.error }
    case FETCH_ISSUES_REQUEST:
      return { fetching: true, issues: [], error: null }
    default:
      return state
  }
}
