import { FirstColumn } from "./FirstColumn"
import { SecondColumn } from "./SecondColumn"

export function IssueRows(props) {
  return (
    <div className="issue-row">
      <FirstColumn title={props.title} labels={props.labels} />
      <SecondColumn
        number={props.number}
        createdAt={props.createdAt}
        openedBy={props.openedBy}
      />
    </div>
  )
}
