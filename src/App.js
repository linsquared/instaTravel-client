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
import UserTab from './components/UserTab/UserTab';
import UserProfile from './pages/UserProfile/UserProfile';
import Itinerary from './pages/Itinerary/Itinerary';

function App() {
  // set err state
  const [error, setError] = useState('')

  // setting success state
  const [success, setSuccess] = useState(false)

  // err message
  const [errMsg, setErrMsg] = useState(false)

  // all itineraries
  const [allItineraries, setAllItineraries] = useState([])

  // all users
  const [allUsers, setAllUsers] = useState([])

  // searchbar
  const [searchInput, setSearchInput] = useState('')

  // user searchbar
  const [searchUser, setSearchUser] = useState('')

  // searchbar form control 
  const searchHandle = (e) => {
    setSearchInput(e.target.value)
  }

  // usersearch form control
  const searchUserHandle = (e) => {
    setSearchUser(e.target.value)
    console.log(searchUser)
  }

  // select an user state
  const [userId, setUserId] = useState('')


  useEffect(() => {
    axios.get('http://localhost:8080/itineraries')
      .then(res => {
        setAllItineraries(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then(res => {
        setAllUsers(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home
          allItineraries={allItineraries}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchHandle={searchHandle}
          allUsers={allUsers}
          searchUser={searchUser}
          setSearchUser={setSearchUser}
          searchUserHandle={searchUserHandle}
          userId={userId} setUserId={setUserId} />} />

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

        <Route path='city' element={<CityResults
          allItineraries={allItineraries}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchHandle={searchHandle} />} />

        <Route path='/user/:profileId' element={<UserProfile
          allItineraries={allItineraries}
          userId={userId}
          setUserId={setUserId}
          allUsers={allUsers} />} />

        <Route path='/itinerary/:itineraryId' element={<Itinerary />} />

        {/* TEMP ROUTE */}
        <Route path='add' element={<AddItinerary />} />
        <Route path='day' element={<AddDayInfo />} />
        <Route path='activity' element={<Activity />} />
        <Route path='head' element={<Header />} />
        <Route path='home' element={<UserProfile />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
