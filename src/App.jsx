import { Outlet } from 'react-router-dom'

// app level components
export default function App() {
  return (
    <>
      <h1>App-level stuff</h1>
      <Outlet />
    </>
  )
}