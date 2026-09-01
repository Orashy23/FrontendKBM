import { Navbar, Footer } from '../components'
import type { Lesson } from '../data/lessons'
import '../App.css'
import './LessonDetails.css'

interface LessonDetailsProps {
  lesson: Lesson
  onBack?: () => void
}

function LessonDetails({ lesson, onBack }: LessonDetailsProps) {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page details-page">
        <div className="breadcrumb">
          <button type="button" className="breadcrumb-link" onClick={onBack}>
            ⌂ Home
          </button>
          <span className="breadcrumb-sep">›</span>
          <span>Lesson Details</span>
        </div>

        <div className="details-layout">
          <div className="details-main">
            <div className="details-hero">
              <span className="details-pill">{lesson.category}</span>
              <h1 className="details-title">{lesson.title}</h1>
              <a href="#" className="details-project">
                Project: Automation Solutions Phase 2
              </a>
            </div>

            <div className="details-card">
              <div className="details-author-row">
                <div className="details-author">
                  <div className="details-avatar">{lesson.authorinitials}</div>
                  <div>
                    <div className="details-author-label">Author</div>
                    <div className="details-author-name">{lesson.authorname}</div>
                  </div>
                </div>

                <div className="details-meta">
                  <span className="details-stars">
                    {'★'.repeat(Math.round(lesson.rating)) +
                      '☆'.repeat(5 - Math.round(lesson.rating))}
                  </span>
                  <span className="details-rating-num">
                    {lesson.rating.toFixed(1)} ({lesson.reviews} reviews)
                  </span>
                  <button className="details-share">Share</button>
                </div>
              </div>

              <hr className="details-divider" />

              <section className="details-section">
                <h2 className="details-section-title">Lesson Summary</h2>
                <p className="details-text">
                  A detailed guide on refining PLC logic to reduce cycle times in
                  high-speed packaging lines by 15%.
                </p>
              </section>

              <section className="details-section">
                <h2 className="details-section-title">Description</h2>
                <p className="details-text">
                  This lesson documents the specific logic adjustments made to the
                  high-speed sorting system. It covers the transition from
                  traditional sequential processing to event-driven execution,
                  significantly reducing idle time between cycles.
                </p>
                <p className="details-text">
                  Key technical steps include optimization of task priorities and
                  implementing high-speed interrupt routines for sensor feedback.
                  By adjusting the task cycle time from 15ms to a variable
                  execution model based on sensor triggers, the overall throughput
                  was increased without compromising system stability.
                </p>
              </section>
            </div>

            <button className="details-back-btn" onClick={onBack}>
              ‹ Back to Lessons
            </button>
          </div>

          <aside className="details-sidebar">
            <div className="side-card">
              <h3 className="side-card-title">Attachments</h3>
              <div className="side-file">
                <span className="side-file-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </span>
                <div className="side-file-info">
                  <div className="side-file-name">PLC Logic_Rev4.pdf</div>
                  <div className="side-file-meta">2.4 MB · PDF</div>
                </div>
                <button className="side-file-download" aria-label="Download">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 12l5 5 5-5M5 21h14" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="side-card">
              <h3 className="side-card-title">Quick Links</h3>
              <a href="#" className="side-link">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                  <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                </svg>
                Internal Wiki - Automation
              </a>
            </div>

            <div className="side-card">
              <h3 className="side-card-title">Keywords</h3>
              <div className="side-tags">
                <span className="side-tag">#automation</span>
                <span className="side-tag">#PLC</span>
                <span className="side-tag">#Packaging</span>
              </div>
            </div>

            <div className="side-card side-card-highlight">
              <h3 className="side-highlight-title">Have a similar lesson?</h3>
              <p className="side-highlight-text">
                Sharing your experience helps our engineering community grow
                stronger.
              </p>
              <button className="side-highlight-btn">+ Create Lesson</button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LessonDetails
