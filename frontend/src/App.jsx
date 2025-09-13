import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import AuthLayout from './layout/AuthLayout'
import Register from './pages/auth/Register'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App
