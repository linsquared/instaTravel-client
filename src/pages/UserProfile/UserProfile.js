// core stuff 
import { Link } from 'react-router-dom'
// styles, pages, components
import './UserProfile.scss'
import Nav from '../../components/Nav/Nav'
import fake from '../../assets/images/plan3.jpg'
import Buttons from '../../components/Buttons/Buttons'
import link from '../../assets/icons/link.png'
import pin from '../../assets/icons/pin2.png'

const UserProfile = ({ allItineraries, userId, setUserId, allUsers }) => {

    const userItineraries = allItineraries.filter(item => item.user_id === userId)
    const targetUser = allUsers?.find(item => item.user_id === userId)
    return (
        <main className='userProfile'>
            <header className='userProfile__header'>
                <Nav />
                <div className='userProfile__username'>{targetUser.user_name}</div>
            </header>

            <section className='userProfile__info'>
                <div className='userProfile__img-wrapper'>
                    <img className='userProfile__img' src={targetUser.user_icon} alt='user self icon' />
                </div>
                <div className='userProfile__statistics'>
                    <div className='userProfile__itinerary'>
                        <span className='userProfile__count'>{targetUser.itinerary_count}</span>
                        <span className='userProfile__text'>Itineraries</span>
                    </div>
                    <div className='userProfile__followers'>
                        <span className='userProfile__count'>{targetUser.followers}</span>
                        <span className='userProfile__text'>Followers</span>
                    </div>
                </div>
            </section>

            <section className='userProfile__user'>
                <span className='userProfile__name'>{targetUser.author}</span>

                <Link href="mailto:example@example.com" ><span className='userProfile__email'>
                    <img src={link} alt='link icon' className='userProfile__link-icon' />
                    {targetUser.email}
                </span></Link>

            </section>

            <div className='userProfile__btn-wrapper'>
                <div className='userProfile__btn follow'><Buttons value={'Follow'} /></div>
                <button className='userProfile__btn userProfile__btn-share'>Share</button>
            </div>
            <ul className='userProfile__card-wrapper' >

                {userItineraries.map((itinerary, i) => {
                    return (
                        <li className='userProfile__item' key={i}>
                            <div className='userProfile__card' >
                                <img src={itinerary.city_img} alt='city image' className='userProfile__city-img' />
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