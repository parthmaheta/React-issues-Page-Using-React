import { useSelector } from "react-redux"

export function Pagination({ page, setPage }) {
  //if the issues are less than 30 than there are no more issues
  const isLastPage = useSelector((state) => state.issues.issues.length) < 30

  const isFirstPage = page === 1

  return (
    <div className="pagination">
      <PreviousPages page={page} setPage={setPage} isFirstPage={isFirstPage} />
      <button className="active">{page}</button>
      <NextPages page={page} setPage={setPage} isLastPage={isLastPage} />
    </div>
  )
}

function PreviousPages({ page, setPage, isFirstPage }) {
  return (
    <>
      <button onClick={() => setPage(page - 1)} disabled={isFirstPage}>
        Prev
      </button>
      {page - 2 > 0 && (
        <button onClick={() => setPage(page - 2)} disabled={isFirstPage}>
          {page - 2}
        </button>
      )}
      {page - 1 > 0 && (
        <button onClick={() => setPage(page - 1)} disabled={isFirstPage}>
          {page - 1}
        </button>
      )}
    </>
  )
}

function NextPages({ page, setPage, isLastPage }) {
  return (
    <>
      {!isLastPage && (
        <button onClick={() => setPage(page + 1)} disabled={isLastPage}>
          {page + 1}
        </button>
      )}
      {!isLastPage && (
        <button onClick={() => setPage(page + 2)} disabled={isLastPage}>
          {page + 2}
        </button>
      )}
      <button onClick={() => setPage(page + 1)} disabled={isLastPage}>
        Next
      </button>
    </>
  )
}
