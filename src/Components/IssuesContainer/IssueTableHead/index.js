import { FirstColumn } from "./FirstColumn"
import { SecondColumn } from "./SecondColumn"

export function IssueTableHead() {
  return (
    <div className="flex-space-between issue-table-head">
      <FirstColumn />
      <SecondColumn />
    </div>
  )
}
