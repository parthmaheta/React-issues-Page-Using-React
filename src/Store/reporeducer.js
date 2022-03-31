import {
  FETCH_REPO_ERROR,
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
} from "./constants"

const initialState = {
  fetching: false,
  repo: {},
  error: null,
}

export default function reporeducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPO_SUCCESS:
      return { fetching: false, repo: action.repo, error: null }
    case FETCH_REPO_ERROR:
      return { fetching: false, repo: {}, error: action.error }
    case FETCH_REPO_REQUEST:
      return { fetching: true, repo: {}, error: null }
    default:
      return state
  }
}
