import { useState } from 'react'
import './App.css'
import {
  Navbar,
  PageHeader,
  FilterBar,
  LessonCard,
  Pagination,
  Footer,
  FloatingActionButton,
} from './components'
import Chatbot from './pages/Chatbot'
import LessonDetails from './pages/LessonDetails'
import CreateLesson from './pages/CreateLesson'
import { lessons, type Lesson } from './data/lessons'

type View = 'lessons' | 'chatbot' | 'details' | 'create'

function App() {
  const [view, setView] = useState<View>('lessons')
  const [lessonList, setLessonList] = useState<Lesson[]>(lessons)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

  function openDetails(lesson: Lesson) {
    setSelectedLesson(lesson)
    setView('details')
  }

  function addLesson(lesson: Lesson) {
    setLessonList((prev) => [...prev, lesson])
    setView('lessons')
  }

  if (view === 'chatbot') {
    return <Chatbot onBack={() => setView('lessons')} />
  }

  if (view === 'create') {
    return (
      <CreateLesson
        onBack={() => setView('lessons')}
        onCreate={addLesson}
      />
    )
  }

  if (view === 'details' && selectedLesson) {
    return (
      <LessonDetails lesson={selectedLesson} onBack={() => setView('lessons')} />
    )
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page">
        <PageHeader onCreate={() => setView('create')} />
        <FilterBar />

        <div className="lesson-grid">
          {lessonList.map((lesson) => (
            <LessonCard
              key={lesson.id}
              title={lesson.title}
              category={lesson.category}
              authorname={lesson.authorname}
              authorinitials={lesson.authorinitials}
              rating={lesson.rating}
              reviews={lesson.reviews}
              onOpen={() => openDetails(lesson)}
            />
          ))}
        </div>

        <Pagination />
      </main>

      <Footer />
      <FloatingActionButton onClick={() => setView('chatbot')} />
    </div>
  )
}

export default App
