import { getDifference } from "./../getTimeDifference"

export function SecondColumn(props) {
  return (
    <div className="second-column">
      <span>{"#" + props.number}</span>
      <span>{" opened " + getDifference(props.createdAt) + " ago"}</span>
      <span>{" by " + props.openedBy}</span>
    </div>
  )
}
