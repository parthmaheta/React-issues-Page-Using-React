import { useDispatch, useSelector } from "react-redux"
import {
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_ERROR,
} from "../../Store/constants"
import { ShowError } from "../ShowError"
import { ShowLoading } from "../ShowLoading"
import { useEffect } from "react"
import axios from "axios"
import { REPO_ISSUES_URL } from "./../../API/constants"
import "./index.css"
import { IssueTableHead } from "./IssueTableHead"
import { IssueTableBody } from "./IssueTableBody"

export default function IssuesContainer({ page }) {
  const state = useSelector((state) => state.issues)
  const dispatch = useDispatch()

  const fetchIssues = async () => {
    dispatch({ type: FETCH_ISSUES_REQUEST })
    try {
      const response = await axios.get(REPO_ISSUES_URL + page)
      const data = getData(response.data)
      dispatch({ type: FETCH_ISSUES_SUCCESS, issues: data })
    } catch (error) {
      dispatch({ type: FETCH_ISSUES_ERROR, error: error })
    }
  }
  useEffect(() => {
    fetchIssues()
  }, [page])

  {
    return state.fetching ? (
      <ShowLoading />
    ) : state.error ? (
      <ShowError reLoad={fetchIssues} />
    ) : (
      <ShowIssues />
    )
  }
}

function ShowIssues(props) {
  return (
    <div className="issue-container">
      <IssueTableHead />
      <IssueTableBody />
    </div>
  )
}

function getData(response) {
  return response.map((issue) => {
    return {
      title: issue.title,
      number: issue.number,
      createdAt: issue.created_at,
      openedBy: issue.user.login,
      labels: grabLabels(issue.labels),
    }
  })
}

function grabLabels(labels) {
  return labels.map((label) => {
    return { name: label.name, color: "#" + label.color }
  })
}
