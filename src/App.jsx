import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'

// app level components
export default function App() {
  return (
    <>
      <header>
        Header section starts here
        <h1>App Name / Logo</h1>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/hedy">Hedy</a></li>
            <li><a href="/browse">Browse</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        Header section ends here
      </header>
      <Header />

      <Outlet />
    </>
  )
}