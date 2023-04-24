// core stuff 
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'

// styles, pages, components
import './UserProfile.scss'
import Nav from '../../components/Nav/Nav'
import Buttons from '../../components/Buttons/Buttons'
import link from '../../assets/icons/link.png'
import pin from '../../assets/icons/pin2.png'

const UserProfile = ({ userId, handleLogout, allItineraries, allUsers }) => {
    // retriving context info
    const { user } = useContext(UserContext)

    // find specific itinerary and user
    const userItineraries = allItineraries?.filter(item => item.user_id === userId)
    const targetUser = allUsers?.find(item => item.user_id === userId)

    const navigate = useNavigate()
    const itineraryId = useParams
    // onclick func for each card 
    const sendItinerary = (e, itinerary) => {
        let detailItinerary;
        axios.get(`http://localhost:8080/itineraries/id/${itinerary.itinerary_id}`)
            .then(res => {
                console.log(res.data)
                detailItinerary = res.data
                navigate(`/itinerary/:${itineraryId}`, { state: { itinerary, detailItinerary } })

            })
            .catch(err => console.log(err))
    }

    // to add an itinerary and send user info
    const currentUser = {
        user_icon: targetUser?.user_icon,
        user_name: targetUser?.user_name,
        user_id: targetUser?.user_id
    }
    const addItin = () => {
        navigate('/add', { state: { currentUser } })

    }

    return (
        <main className='userProfile'>
            <header className='userProfile__header'>
                <Nav handleLogout={handleLogout} />
                <div className='userProfile__username'>{targetUser?.user_name}</div>
            </header>

            <section className='userProfile__info'>
                <div className='userProfile__img-wrapper'>
                    <img className='userProfile__img' src={targetUser?.user_icon} alt='user self icon' />
                </div>
                <div className='userProfile__statistics'>
                    <div className='userProfile__itinerary'>
                        <span className='userProfile__count'>{targetUser?.itinerary_count}</span>
                        <span className='userProfile__text'>Itineraries</span>
                    </div>
                    <div className='userProfile__followers'>
                        <span className='userProfile__count'>{targetUser?.followers}</span>
                        <span className='userProfile__text'>Followers</span>
                    </div>
                </div>
            </section>

            <section className='userProfile__user'>
                <span className='userProfile__name'>{targetUser?.author}</span>

                <Link href="mailto:example@example.com"><span className='userProfile__email'>
                    <img src={link} alt='link icon' className='userProfile__link-icon' />
                    {targetUser?.email}
                </span></Link>

            </section>

            {user ?
                <div className='userProfile__btn-wrapper'>
                    <div className='userProfile__btn follow'><Buttons value={'Edit'} name={'buttons'} /></div>
                    <div className='userProfile__btn share'>
                        <Buttons value={'Add'} name={'buttons-white'} btnfunc={addItin} /></div>
                </div>
                :
                <div className='userProfile__btn-wrapper'>
                    <div className='userProfile__btn follow'><Buttons value={'Follow'} name={'buttons'} /></div>
                    <div className='userProfile__btn share'><Buttons value={'Share'} name={'buttons-white'} /></div>
                </div>}


            <ul className='userProfile__card-wrapper' >

                {userItineraries?.map((itinerary, i) => {
                    return (
                        <li className='userProfile__item' key={i} onClick={(e) => { sendItinerary(e, itinerary) }}>
                            <div className='userProfile__card' >
                                <img src={itinerary.city_img} alt='city' className='userProfile__city-img' />
                            </div>
                            <div className='userProfile__card-text'>
                                <div className='userProfile__card-info'>
                                    <img src={pin} alt='pin icon' className='userProfile__pin' />
                                    <span className='userProfile__location'>{itinerary.city}</span>
                                </div>

                                <div className='userProfile__duration'>Duration: {itinerary.duration} days</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>)
}

export default UserProfile