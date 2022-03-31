import "./App.css"
import { useState } from "react"
import IssuesContainer from "./Components/IssuesContainer"
import RepoInfoContainer from "./Components/RepoInfoContainer"
import { Pagination } from "./Components/Pagination"

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="App">
      <RepoInfoContainer />
      <IssuesContainer page={currentPage} />
      <Pagination page={currentPage} setPage={setCurrentPage} />
    </div>
  )
}

export default App
