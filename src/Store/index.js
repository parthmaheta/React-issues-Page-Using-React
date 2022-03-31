import { combineReducers, createStore } from "redux"
import repoReducer from "./reporeducer"
import issuesReducer from "./issuesreducer"

export default createStore(
  combineReducers({ repo: repoReducer, issues: issuesReducer })
)
