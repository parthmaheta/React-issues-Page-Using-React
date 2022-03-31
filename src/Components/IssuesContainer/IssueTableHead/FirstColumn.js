import { useSelector } from "react-redux";

export function FirstColumn() {
  const { open_issues } = useSelector((state) => state.repo.repo);
  return (
    <div className="issue-table-head-groud">
      <img src="./warning.png" alt="icon" width="20px" heigth="20px" />
      <span style={{ fontWeight: "bold" }}>{open_issues} Open</span>
    </div>
  );
}
