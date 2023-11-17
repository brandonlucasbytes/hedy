import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import "./app.scss"

// app level components
export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== "/hedy" && <Header />}
      <Outlet />
    </div>
  )
}