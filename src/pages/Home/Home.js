import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// img,  pages and components
import './Home.scss'
import Header from '../../components/Header/Header';
import pin from '../../assets/icons/pin.png';
import GuestHome from '../../components/GuestHome/GuestHome'
import UserTab from '../../components/UserTab/UserTab';

const Home = ({ allItineraries, setSearchInput, searchInput, searchHandle, allUsers }) => {
    // set states
    const [user, setUser] = useState('')
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
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
                setFailedAuth(true)
            })
    }, [])

    // logout func
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setUser(null);
        setFailedAuth(true);
    };

    const [tripsTab, setTripsTab] = useState(true)
    const [usersTab, setUsersTab] = useState(false)

    // two tab click function
    const tripTabClicked = () => {
        console.log('clicked')
        setUsersTab(false)
        setTripsTab(true)
    }
    const userTabClick = () => {
        setTripsTab(false)
        setUsersTab(true)
        console.log('clicked')

    }

    // redirect to log in
    if (failedAuth) {
        return (
            <main className="home">
                <Header value={'Log in'} />

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
                    setTripsTab={setTripsTab}
                    tripsTab={tripsTab}
                    setUsersTab={setUsersTab} />


                <UserTab allUsers={allUsers}
                    setTripsTab={setTripsTab}
                    usersTab={usersTab}
                    setUsersTab={setUsersTab} />


            </main>
        )
    }

    if (user === null) {
        return (<main>
            <h1>Loading...</h1>
        </main>
        )

    }

    return (
        <main className="home">
            <Header value={'Log out'} func={handleLogout} />
        </main>
    )
}

export default Home