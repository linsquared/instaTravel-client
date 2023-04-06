// core stuff
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components, pages, styles
import './App.scss';
import './styles/global.scss'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login'
import AddItinerary from './pages/AddItinerary/AddItinerary';
import AddBasicInfo from './components/AddBasicInfo/AddBasicInfo';
import AddDayInfo from './components/AddDayInfo/AddDayInfo';
import Activity from './components/Activity/Activity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* TEMP ROUTE */}
        <Route path='add' element={<AddItinerary />} />
        <Route path='day' element={<AddDayInfo />} />
        <Route path='activity' element={<Activity />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
