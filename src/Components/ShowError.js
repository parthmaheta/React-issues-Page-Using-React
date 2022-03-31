export function ShowError(props) {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>
        Sorry Something Went Wrong Error
        <button
          onClick={props.reLoad}
          style={{ marginLeft: "0.8rem", padding: "0.5rem" }}
        >
          retry
        </button>
      </h1>
    </div>
  )
}
