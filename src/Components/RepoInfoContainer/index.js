import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { REPO_URL } from "../../API/constants"
import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_ERROR,
  FETCH_REPO_SUCCESS,
} from "../../Store/constants"
import "./index.css"
import { ShowError } from "./../ShowError"
import { ShowLoading } from "./../ShowLoading"
import { ShowRepo } from "./ShowRepo"

export default function RepoInfoContainer(props) {
  const state = useSelector((state) => state.repo)
  const dispatch = useDispatch()

  const fetchRepo = async () => {
    dispatch({ type: FETCH_REPO_REQUEST })
    try {
      const response = await axios.get(REPO_URL)
      const data = getInfo(response)
      dispatch({ type: FETCH_REPO_SUCCESS, repo: data })
    } catch (error) {
      dispatch({ type: FETCH_REPO_ERROR, error })
    }
  }

  useEffect(() => {
    fetchRepo()
  }, [])

  return state.fetching ? (
    <ShowLoading />
  ) : state.error ? (
    <ShowError reLoad={fetchRepo} />
  ) : (
    <ShowRepo {...state.repo} />
  )
}

function getInfo(response) {
  return {
    full_name: response.data.full_name,
    stars: response.data.stargazers_count,
    forks: response.data.forks_count,
    open_issues: response.data.open_issues_count,
    watch: response.data.subscribers_count,
    html_url: response.data.html_url,
  }
}
