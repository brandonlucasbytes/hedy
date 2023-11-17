import { Link } from 'react-router-dom'
import './not-found.scss'

function NotFound() {
  return (
    <main className="not-found">
        <div className="image-404">
            <img src="/wireframe-box.jpeg" alt="" />
        </div>
        <h2>This page is currently tangled up.</h2>
        <h2>To be untangled...</h2>
        <Link to="/"><button>Return Home</button></Link>
    </main>
  )
}

export default NotFound
