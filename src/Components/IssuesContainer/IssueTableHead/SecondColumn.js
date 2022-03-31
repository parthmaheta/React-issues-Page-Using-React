export function SecondColumn() {
  const navs = ["Author", "Labels", "Projects", "Milestone", "Assignee", "Sort"]
  return (
    <div className="second-column">
      {navs.map((value) => {
        return <ButtonWithDropDown name={value} key={value} />
      })}
    </div>
  )
}
function ButtonWithDropDown(props) {
  return (
    <div>
      <span>{props.name}</span>
      <img src="./expand.png" alt="icon" width="20px" heigth="25px" />
    </div>
  )
}
