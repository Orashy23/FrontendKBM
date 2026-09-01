import './Pagination.css'

function Pagination() {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="pagination-arrow" aria-label="Previous page">
        ‹
      </button>

      <button className="pagination-page active">1</button>
      <button className="pagination-page">2</button>
      <button className="pagination-page">3</button>

      <button className="pagination-arrow" aria-label="Next page">
        ›
      </button>
    </nav>
  )
}

export default Pagination
