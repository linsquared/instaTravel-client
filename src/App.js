// core stuff
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
import Header from './components/Header/Header';
import CityResults from './pages/CityResults/CityResults';

function App() {
  // set err state
  const [error, setError] = useState('')

  // setting success state
  const [success, setSuccess] = useState(false)

  // err message
  const [errMsg, setErrMsg] = useState(false)

  // all itineraries
  const [allItineraries, setAllItineraries] = useState([])

  // highest rated

  useEffect(() => {
    axios.get('http://localhost:8080/itineraries')
      .then(res => {
        setAllItineraries(res.data)
      })
      .catch(err => console.log(err))
  }, [])




  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home allItineraries={allItineraries} />} />
        <Route path='/register' element={<Signup
          errMsg={errMsg}
          setErrMsg={setErrMsg}
          error={error}
          setError={setError}
          success={success}
          setSuccess={setSuccess} />} />

        <Route path='/login' element={<Login
          errMsg={errMsg}
          setErrMsg={setErrMsg}
          error={error}
          setError={setError}
          success={success}
          setSuccess={setSuccess} />} />

        <Route path='city' element={<CityResults allItineraries={allItineraries} />} />


        {/* TEMP ROUTE */}
        <Route path='add' element={<AddItinerary />} />
        <Route path='day' element={<AddDayInfo />} />
        <Route path='activity' element={<Activity />} />
        <Route path='head' element={<Header />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
