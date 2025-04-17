import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import {Home} from './pages/Home.jsx'
import {About} from './pages/About.jsx'

const router = createBrowserRouter([
  {
      path: '/Map/',
      element: <Home/>
  },
  {
      path: '/Map/about',
      element: <About/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
