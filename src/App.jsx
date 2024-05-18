
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
