import { Link, Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import "./app.scss"

// app level components
export default function App() {
  return (
    <div className="app">
      <header>
        Header section starts here
        <h1>App Name / Logo</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hedy">Hedy</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        Header section ends here
      </header>
      <Header />

      <Outlet />
    </div>
  )
}