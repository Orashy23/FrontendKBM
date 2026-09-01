import './FilterBar.css'

function FilterBar() {
  return (
    <>
<div className="filter-bar">
  <div className="filter-bar-left">
    <input type="text" placeholder="Search for a lesson..." className="search-input" />
    <label htmlFor="filter-select">Filter by:</label>
    <select id="filter-select">
      <option value="all">All</option>
      <option value="Department">Department</option>
      <option value="UserName">User Name</option>
      <option value="LessonName">Lesson Name</option>
    </select>
  </div>

  <div className="filter-bar-right">
    <button className="apply-filter-btn">Apply Filter</button>
  </div>
</div>

    

    </>
  )
}

export default FilterBar
