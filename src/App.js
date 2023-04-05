import './App.scss';
import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
