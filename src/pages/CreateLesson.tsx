import { useState, type FormEvent } from 'react'
import { Navbar, Footer } from '../components'
import type { Lesson } from '../data/lessons'
import '../App.css'
import './CreateLesson.css'

interface CreateLessonProps {
  onBack?: () => void
  onCreate?: (lesson: Lesson) => void
}

function CreateLesson({ onBack, onCreate }: CreateLessonProps) {
  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')
  const [industry, setIndustry] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return

    const newLesson: Lesson = {
      id: Date.now(),
      title: title.trim(),
      category: industry || 'General',
      authorname: 'You',
      authorinitials: 'YO',
      rating: 0,
      reviews: 0,
    }

    onCreate?.(newLesson)
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page create-page">
        <div className="breadcrumb">
          <button type="button" className="breadcrumb-link" onClick={onBack}>
            ⌂ Home
          </button>
          <span className="breadcrumb-sep">›</span>
          <span>Create Lesson</span>
        </div>

        <header className="create-header">
          <span className="create-header-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
            </svg>
          </span>
          <div>
            <h1 className="create-title">Create Lesson</h1>
            <p className="create-subtitle">
              Fill in the details below to create a new knowledge base lesson.
            </p>
          </div>
        </header>

        <div className="create-layout">
          <form className="create-form" onSubmit={handleSubmit}>
            <section className="form-card">
              <h2 className="form-card-title">
                <span className="form-card-dot" /> Basic Information
              </h2>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="lessonTitle">Lesson Title *</label>
                  <input
                    id="lessonTitle"
                    type="text"
                    placeholder="Enter lesson title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="projectName">Project Name *</label>
                  <input
                    id="projectName"
                    type="text"
                    placeholder="Enter project name"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="industry">Industry *</label>
                <select
                  id="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                >
                  <option value="" disabled>
                    Select industry
                  </option>
                  <option value="Automation">Automation</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                </select>
              </div>
            </section>

            <section className="form-card">
              <h2 className="form-card-title">
                <span className="form-card-dot" /> Lesson Content
              </h2>

              <div className="field">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  placeholder="Write the full description of the lesson..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </section>

            <div className="form-actions">
              <button type="button" className="btn-discard" onClick={onBack}>
                Discard
              </button>
              <button type="submit" className="btn-submit">
                Submit Lesson →
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CreateLesson
