// core stuff
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
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
import CityResults from './pages/CityResults/CityResults';
import UserProfile from './pages/UserProfile/UserProfile';
import Itinerary from './pages/Itinerary/Itinerary';
import GuestHome from './components/GuestHome/GuestHome';
import Footbar from './components/Footbar/Footbar';
import Upload from './pages/Upload/Upload';
import { UserContext } from './context/UserContext';

function App() {
  // retrieve user context info
  const { user } = useContext(UserContext)

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

  // usersearch form control
  const searchUserHandle = (e) => {
    setSearchUser(e.target.value)
  }

  const [isPostSuccessful, setPostSuccessful] = useState(false)

  // select an user state
  const [userId, setUserId] = useState('')


  useEffect(() => {
    axios.get('http://localhost:8080/itineraries')
      .then(res => {
        setAllItineraries(res.data)
      })
      .catch(err => console.log(err))
  }, [user])

  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then(res => {
        setAllUsers(res.data)
      })
      .catch(err => console.log(err))
  }, [user])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home
          allItineraries={allItineraries}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          // searchHandle={searchHandle}
          allUsers={allUsers}
          searchUser={searchUser}
          setSearchUser={setSearchUser}
          searchUserHandle={searchUserHandle}
          userId={userId} setUserId={setUserId}
        />} />

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

        <Route path='/city/:city' element={<CityResults
          allItineraries={allItineraries}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        // searchHandle={searchHandle} 
        />} />

        <Route path='/user/:profileId' element={<UserProfile
          allItineraries={allItineraries}
          allUsers={allUsers}
          userId={userId}
          setUserId={setUserId}
        />} />

        <Route path='/itinerary/:itineraryId' element={<Itinerary />} />
        <Route path='/upload' element={<Upload
          userId={userId} />} />


        {/* TEMP ROUTE */}
        <Route path='add' element={<AddItinerary />} />
        <Route path='day' element={<AddDayInfo />} />
        <Route path='foot' element={<Footbar />} />
        <Route path='guest' element={<GuestHome />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
