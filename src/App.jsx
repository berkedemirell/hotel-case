

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ReservationPage from './pages/ReservationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  const Layout = () => {
    return (
      <>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path:"/reservation",
          element: <ReservationPage/>
        },
        {
          path: '/about',
          element: <AboutPage/>
        },
        {
          path: '/contact',
          element: <ContactPage/>
        }
      ]
    }
  ])


  return (
    <div className='font-noto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
