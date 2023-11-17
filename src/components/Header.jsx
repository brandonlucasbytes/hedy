import { Link } from "react-router-dom"
import "./header.scss"

function Header() {
  return (
    <header className="header">
        <h1><Link to="/">Hedy</Link></h1>

        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/hedy">Enter</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header