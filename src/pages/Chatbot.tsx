import { Navbar, Footer } from '../components'
import '../App.css'
import './Chatbot.css'
import {useState} from 'react'
import { askGemini } from '../lib/gemini'

type Message = {
  role: 'user' | 'bot'
  text: string
}






interface ChatbotProps {
  onBack?: () => void
}

function Chatbot({ onBack }: ChatbotProps) {
  
const [messages, setMessages] = useState<Message[]>([{role:'bot', text: 'Hello, How can I help you today?'}])
const [input, setInput] = useState<string>('')
const [loading, setLoading] = useState<boolean>(false)


async function handleSend() {
  const text = input.trim()
  if (!text || loading) return

  setMessages((prev) => [...prev, { role: 'user', text }])
  setInput('')
  setLoading(true)

  try {
    const reply = await askGemini(text)
    setMessages((prev) => [...prev, { role: 'bot', text: reply }])
  } catch {
    setMessages((prev) => [
      ...prev,
      { role: 'bot', text: 'Sorry, something went wrong.' },
    ])
  } finally {
    setLoading(false)
  }
}


  return (
    <div className="app-shell">
      <Navbar />

      <main className="page chatbot-page">
        <div className="breadcrumb">
          <button type="button" className="breadcrumb-link" onClick={onBack}>
            ⌂ Home
          </button>
          <span className="breadcrumb-sep">›</span>
          <span>Chatbot</span>
        </div>

        <div className="chatbot-layout">
          <aside className="chat-history">
            <h2 className="chat-history-title">History</h2>
            <p className="chat-history-empty">All your chats are saved here.</p>
            <button className="chat-new-btn">+ New Conversation</button>
          </aside>

          <section className="chat-window">
            <header className="chat-window-header">
              <button className="chat-back-btn" aria-label="Back" onClick={onBack}>
                ‹
              </button>
              <span className="chat-bot-avatar" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="8" width="16" height="12" rx="2" />
                  <path d="M12 8V4M9 3h6" />
                  <circle cx="9" cy="14" r="1" />
                  <circle cx="15" cy="14" r="1" />
                </svg>
              </span>
              <span className="chat-window-title">AI Assistant</span>
            </header>

            <div className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`chat-message ${m.role}`}>
                  {m.role === 'bot' && (
                    <span className="chat-bot-avatar sm" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="16" height="12" rx="2" />
                        <path d="M12 8V4M9 3h6" />
                        <circle cx="9" cy="14" r="1" />
                        <circle cx="15" cy="14" r="1" />
                      </svg>
                    </span>
                  )}
                  <div className="chat-bubble">{m.text}</div>
                </div>
              ))}

              {loading && (
                <div className="chat-message bot">
                  <div className="chat-bubble">Thinking…</div>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="chat-input-bar">
          <button className="chat-input-add" aria-label="Add attachment">
            +
          </button>
          <input
            className="chat-input"
            type="text"
            placeholder="Ask me anything about your knowledge base..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend()
            }}
          />
          <button
            className="chat-send-btn"
            aria-label="Send"
            onClick={handleSend}
            disabled={loading}
          >
            →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Chatbot
