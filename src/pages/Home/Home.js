import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// img,  pages and components
import './Home.scss'
import Header from '../../components/Header/Header';
import pin from '../../assets/icons/pin.png';
import GuestHome from '../../components/GuestHome/GuestHome'
import UserTab from '../../components/UserTab/UserTab';
import Nav from '../../components/Nav/Nav';
import Buttons from '../../components/Buttons/Buttons';
import link from '../../assets/icons/link.png'
import UserProfile from '../UserProfile/UserProfile';


const Home = ({ allItineraries, setSearchInput, searchInput, searchHandle, allUsers, searchUser, setSearchUser, searchUserHandle, userId, setUserId, login, setLogin }) => {
    // set states
    const [user, setUser] = useState('')
    const [failedAuth, setFailedAuth] = useState(false)
    const [userItinerary, setUserItinerary] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            return setFailedAuth(true)
        }

        // get user profile from api
        axios
            .get('http://localhost:8080/users/current/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => {
                setLogin(true)
                // set current user who just logged in
                setUser(res.data[0]);
                setUserId(res.data[0].user_id);
                // set current user's itienraries
                setUserItinerary(allItineraries.filter(item => item.user_name === res.data[0].user_name))
            })
            .catch(err => {
                console.log(err);
                setFailedAuth(true)
                setLogin(false)
            })
    }, [])

    // logout func
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setUser(null);
        setFailedAuth(true);
        setLogin(false)
    };

    console.log(login)
    // set two tabs on homepage
    const [tripsTab, setTripsTab] = useState(true)
    const [usersTab, setUsersTab] = useState(false)

    // two tab click function
    const tripTabClicked = () => {
        setUsersTab(false)
        setTripsTab(true)
    }
    const userTabClick = () => {
        setTripsTab(false)
        setUsersTab(true)
    }

    const navigate = useNavigate()

    // const { itineraryId } = useParams
    // // onclick func for each card 
    // const sendItinerary = (e, itinerary) => {
    //     let detailItinerary;
    //     axios.get(`http://localhost:8080/itineraries/id/${itinerary.itinerary_id}`)
    //         .then(res => {
    //             detailItinerary = res.data
    //             navigate(`/itinerary/:${itineraryId}`, { state: { itinerary, detailItinerary } })

    //         })
    //         .catch(err => console.log(err))
    // }

    // if (user === null) {
    //     return (<main>
    //         <h1>Loading...</h1>
    //     </main>
    //     )

    // }

    return (
        <main className="home">
            {failedAuth ? <Header value={'Log in'} login={login} />
                :
                <Header value={'Log out'} login={login}
                    handleLogout={handleLogout}
                    userId={userId} />}
            <div className='home__tabs'>
                <div className="home__title-wrapper" onClick={tripTabClicked}>
                    <h1 className='home__title'>Trips</h1>
                </div>

                <div className="home__title-wrapper home__userTab" onClick={userTabClick}>
                    <h1 className='home__title'>Users</h1>
                </div>
            </div>
            {/* // possibly an icon of the person who logged in */}
            <GuestHome allItineraries={allItineraries}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
                searchHandle={searchHandle}
                tripsTab={tripsTab} />


            <UserTab
                allItineraries={allItineraries}
                allUsers={allUsers}
                usersTab={usersTab}
                searchUser={searchUser}
                setSearchUser={setSearchUser}
                searchUserHandle={searchUserHandle}
                userId={userId} setUserId={setUserId}
            />


        </main>
    )



    // return (

    //     // <UserProfile handleLogout={handleLogout}
    //     //     userId={userId} login={login}
    //     //     allItineraries={allItineraries}
    //     //     allUsers={allUsers} />

    // )
}

export default Home