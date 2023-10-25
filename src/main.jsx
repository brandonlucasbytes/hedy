import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Hedy from './pages/Hedy.jsx'
import FAQ from './pages/faq/FAQ.jsx'
import Browse from './pages/browse/Browse.jsx'
import Contact from './pages/contact/Contact.jsx'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="hedy" element={<Hedy />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="browse" element={<Browse />} />
      <Route path="contact" element={<Contact />} />
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);