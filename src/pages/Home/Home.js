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


const Home = ({ allItineraries, setSearchInput, searchInput, searchHandle, allUsers, searchUser, setSearchUser, searchUserHandle, userId, setUserId }) => {
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
                console.log(res.data[0])
                setUser(res.data[0]);
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

    // tempor current itinerary 
    const itinerary = {
        itinerary_id: '2065813795',
        user_id: '630163fc-69c5-4745-ab50-e65fba71ea22',
        user_name: 'lintravels',
        user_icon: 'http://localhost:8080/images/users/sushi.jpg',
        city: 'New York City, USA',
        budget: '$$',
        views: 0,
        likes: 0,
        ratings: 0,
        duration: 3,
        city_img: 'http://localhost:8080/images/cities/nyc5.jpg',
        trip_title: "The Big Apple Awaits: Exploring the Best of New York City",
        date: '06/16/2022',
        description: "Discover the vibrant energy of NYC, from the iconic landmarks of the Statue of Liberty and the Empire State Building to the world-famous museums and galleries of Museum Mile.",

    }

    const navigate = useNavigate()
    const itineraryId = useParams
    // onclick func for each card 
    const sendItinerary = (e, id) => {
        let detailItinerary;
        axios.get(`http://localhost:8080/itineraries/id/${id}`)
            .then(res => {
                console.log(res.data)
                detailItinerary = res.data

                navigate(`/itinerary/:${itineraryId}`, { state: { itinerary, detailItinerary } })

            })
            .catch(err => console.log(err))
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
                    tripsTab={tripsTab} />


                <UserTab allUsers={allUsers}
                    usersTab={usersTab}
                    searchUser={searchUser}
                    setSearchUser={setSearchUser}
                    searchUserHandle={searchUserHandle}
                    userId={userId} setUserId={setUserId} />


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
        <main className='userProfile home'>
            <header className='userProfile__header'>
                <Nav value={'Log out'} func={handleLogout} />
                <div className='userProfile__username'>Hello {user.user_name}</div>
            </header>

            <section className='userProfile__info'>
                <div className='userProfile__img-wrapper'>
                    <img className='userProfile__img' src={user.user_icon} alt='user self icon' />
                </div>
                <div className='userProfile__statistics'>
                    <div className='userProfile__itinerary'>
                        <span className='userProfile__count'>{user.itinerary_count}</span>
                        <span className='userProfile__text'>Itineraries</span>
                    </div>
                    <div className='userProfile__followers'>
                        <span className='userProfile__count'>{user.followers}</span>
                        <span className='userProfile__text'>Followers</span>
                    </div>
                </div>
            </section>

            <section className='userProfile__user'>
                <span className='userProfile__name'>{user.author}</span>

                <Link href="mailto:example@example.com"><span className='userProfile__email'>
                    <img src={link} alt='link icon' className='userProfile__link-icon' />
                    {user.email}
                </span></Link>

            </section>

            <div className='userProfile__btn-wrapper'>
                <div className='userProfile__btn follow'><Buttons value={'Edit'} name={'buttons'} /></div>
                <div className='userProfile__btn share'>
                    <Link to="/add"> <Buttons value={'Add'} name={'buttons-white'} /></Link></div>
            </div>
            <ul className='userProfile__card-wrapper' >


                <li className='userProfile__item' onClick={(e) => { sendItinerary(e, user.itinerary_id) }}>
                    <div className='userProfile__card' >
                        <img src={user.city_img} alt='city image' className='userProfile__city-img' />
                    </div>
                    <div className='userProfile__card-text'>
                        <div className='userProfile__card-info'>
                            <img src={pin} alt='pin icon' className='userProfile__pin' />
                            <span className='userProfile__location'>{user.city}</span>
                        </div>

                        <div className='userProfile__duration'>Duration: {user.duration} days</div>
                    </div>
                </li>


            </ul>

        </main>)
}

export default Home