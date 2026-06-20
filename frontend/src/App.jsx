import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Singup from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Singup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
