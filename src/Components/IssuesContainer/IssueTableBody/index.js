import { useSelector } from "react-redux"
import { IssueRows } from "./IssueRows"

export function IssueTableBody() {
  const issues = useSelector((state) => state.issues.issues)
  return (
    <div className="issue-table-body">
      {issues.map((issue) => {
        return <IssueRows {...issue} />
      })}
    </div>
  )
}
