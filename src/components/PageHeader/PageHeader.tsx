import './PageHeader.css'

interface PageHeaderProps {
  onCreate?: () => void
}

function PageHeader({ onCreate }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header-text">
        <h1 className="page-header-title">Lessons Learned</h1>
        <p className="page-header-desc">
          Welcome to the Lessons Learned page! Here, we share valuable insights
          and experiences gained from our projects and initiatives.
        </p>
      </div>

      <button className="create-lesson-btn" onClick={onCreate}> + Create Lessons </button>
    </header>
  )
}

export default PageHeader
