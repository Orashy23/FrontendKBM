import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img className="footer-logo" src="/images/AdvansysLogo.png" alt="Advansys" />
        <p>© 2026 Advansys Intelligent Solutions. All rights reserved.</p>
      </div>

      <nav className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Support</a>
      </nav>
    </footer>
  )
}

export default Footer
