import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import {Outlet} from 'react-router-dom'

function App() {
  
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => 
    {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  //useEffect(() => {dispatch(logout())},[])

  return !loading ? (
    <div>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
