import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Hedy from './pages/Hedy.jsx'
import Features from './pages/Features.jsx'
import Browse from './pages/Browse.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="hedy" element={<Hedy />} />
      <Route path="features" element={<Features />} />
      <Route path="browse" element={<Browse />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);