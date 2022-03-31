export function RepoTitle(props) {
  return (
    <div>
      <a
        href={props.html_url}
        style={{ fontWeight: "bold", fontSize: "1.5rem" }}
      >
        {props.full_name}
      </a>
    </div>
  )
}

export function ButtonBarContainer(props) {
  return (
    <div className="buttonbar-container">
      <ButtonBar title="Watch" count={props.watch} img={"view.png"} />
      <ButtonBar title="Star" count={props.stars} img={"star.png"} />
      <ButtonBar title="Fork" count={props.forks} img={"branch.png"} />
    </div>
  )
}

export function NavTabs(props) {
  return (
    <div className="nav-tabs">
      <div>Code</div>
      <div className="active">Issues {props.open_issues}</div>
      <div>Pull Reuests </div>
      <div>Projects </div>
      <div>Insights</div>
    </div>
  )
}

function ButtonBar(props) {
  return (
    <div className="button-bar">
      <span className="button-1">
        <img src={"./" + props.img} alt="view" width="25px" height="25px" />{" "}
        {props.title}
      </span>
      <span className="button-2">{props.count}</span>
    </div>
  )
}
