import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'

// img,  pages and components
import './Home.scss'
import GuestHome from '../../components/GuestHome/GuestHome'
import UserTab from '../../components/UserTab/UserTab';
import Nav from '../../components/Nav/Nav';
import Footbar from '../../components/Footbar/Footbar';


const Home = ({ allItineraries, setSearchInput, searchInput, searchHandle, allUsers, searchUser, setSearchUser, searchUserHandle, userId, setUserId }) => {
    // set context
    const { userLogin, userLogout } = useContext(UserContext)
    // set states
    const [failedAuth, setFailedAuth] = useState(false)

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
                // set current user who just logged in
                userLogin(res.data[0])
                setUserId(res.data[0].user_id);
            })
            .catch(err => {
                console.log(err);
                setFailedAuth(true)
            })
    }, [])

    // logout func
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        userLogout(null)
        setFailedAuth(true);
    };

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

    return (
        <main className="home">
            <Nav setFailedAuth={setFailedAuth} />
            <div className='home__image'></div>
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

            <Footbar />
        </main>
    )


}

export default Home