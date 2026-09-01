import './LessonCard.css'

interface LessonCardProps {
  title: string
  category: string
  authorname: string
  authorinitials: string
  rating: number
  reviews: number
  onOpen?: () => void
}

function LessonCard({ title, category, authorname, authorinitials, rating, reviews, onOpen }: LessonCardProps ) {
  return (
    <div className="lesson-card">
      <div className="lesson-card-cover">
        <span className="lesson-card-pill">{category}</span>
      </div>

      <div className="lesson-card-body">
        <div className="lesson-card-author">
          <div className="lesson-card-avatar">{authorinitials}</div>
          <span className="lesson-card-author-name">{authorname}</span>
        </div>

        <div className="lesson-card-rating">
          <span className="lesson-card-stars">
            {'★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating))}
          </span>
          <span className="lesson-card-reviews">({reviews})</span>
        </div>

        <h3 className="lesson-card-title">
          {title}
        </h3>

        <button className="lesson-card-btn" onClick={onOpen}>
          Open Lesson <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  )
}

export default LessonCard
