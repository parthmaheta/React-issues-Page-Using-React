import { ButtonBarContainer, NavTabs, RepoTitle } from "./RepoHeader"

export function ShowRepo(props) {
  return (
    <div className="container">
      <div className="flex-space-between">
        <RepoTitle html_url={props.html_url} full_name={props.full_name} />
        <ButtonBarContainer
          watch={props.watch}
          stars={props.stars}
          forks={props.forks}
        />
      </div>

      <NavTabs />
    </div>
  )
}
