export function FirstColumn(props) {
  return (
    <div className="first-column">
      <img src="./warning.png" alt="warning" height="25px" />
      <span style={{ fontWeight: "bold" }}>{props.title}</span>
      {props.labels.map((label) => {
        return (
          <Label
            key={label.color + label.name}
            color={label.color}
            name={label.name}
          />
        )
      })}
    </div>
  )
}

function Label(props) {
  return (
    <span
      className="label"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.name}
    </span>
  )
}
