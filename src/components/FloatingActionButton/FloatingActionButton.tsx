import './FloatingActionButton.css'


interface FloatingActionButtonProps {
  onClick?: () => void
}

function FloatingActionButton({ onClick }: FloatingActionButtonProps) {



  return (
    <button className="fab" aria-label="Open AI assistant" onClick={onClick}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
      </svg>
    </button>
  )
}

export default FloatingActionButton
