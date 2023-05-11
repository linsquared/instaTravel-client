// core stuff
import { useLocation } from 'react-router-dom';

// styles, pages, components
import './Itinerary.scss';
import Nav from '../../components/Nav/Nav';
import star from '../../assets/icons/star.png'
import like from '../../assets/icons/fullHearted.png'
import share from '../../assets/icons/share.png'
import days from '../../assets/icons/sun.png'
import money from '../../assets/icons/moneyBag.png'
import Buttons from '../../components/Buttons/Buttons';
import Footbar from '../../components/Footbar/Footbar';

const Itinerary = () => {
    // recieve itinerary info
    const location = useLocation()
    const basicTripInfo = location.state?.itinerary
    const detailItinerary = location.state?.detailItinerary.sort((a, b) => a.day - b.day)


    return (
        <main className='itinerary'>
            <header className='itinerary__header'>
                <Nav />
                {/* <div><img src='' alt='back icon' /></div> */}
            </header>
            <section className='itinerary__main'>
                <div className='itinerary__hero'>
                    <div className='itinerary__img-wrapper'>
                        <img src={basicTripInfo.city_img} alt='city pic' className='itinerary__city-img' />
                    </div>
                    <h2 className='itinerary__hero-title'>{basicTripInfo.trip_title}</h2>
                </div>

                <ul className='itinerary__list'>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={like} alt='like icon' className='itinerary__icon' />
                        </div>
                        <h6 className='itinerary__icon-text'>{basicTripInfo.likes}</h6>
                    </li>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={money} alt='money icon' className='itinerary__icon' /></div>
                        <h6 className='itinerary__icon-text'>{basicTripInfo.budget}</h6>
                    </li>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={days} alt='sun icon' className='itinerary__icon' /></div>
                        <h6 className='itinerary__icon-text'>{basicTripInfo.duration} days</h6>
                    </li>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={share} alt='share icon' className='itinerary__icon' /></div>
                        <h6 className='itinerary__icon-text'>Share</h6>
                    </li>
                </ul>

                <section className='itinerary__basic-info'>
                    <div className='itinerary__basic-top'>
                        <h1 className='itinerary__city'>{basicTripInfo.city}</h1>
                        <div className='itinerary__star-wrapper'>
                            <img src={star} alt='star icon' className='itinerary__icon--star' />
                            <span className='itinerary__star-text'>{basicTripInfo.ratings}</span>
                        </div>
                    </div>

                    <section className='itinerary__user-info'>
                        <div className='itinerary__user-wrapper'>
                            <img src={basicTripInfo.user_icon} alt='user icon' className='itinerary__icon--user' />
                        </div>
                        <div className='itinerary__user'>
                            <h6 className='itinerary__username'>{basicTripInfo.user_name}</h6>
                            <h6 className='itinerary__date'>{basicTripInfo.date}</h6>
                        </div>

                        <h3 className='itinerary__city-subtitle'> Description:</h3>
                        <p className='itinerary__city-description'>{basicTripInfo.description} </p>
                    </section>
                </section>

                {detailItinerary.map((day, i) => {
                    return (
                        <article className='itinerary__day-card' key={i}>
                            <h2 className='itinerary__day-title'>Day {day.day}</h2>

                            {day.activity.filter(item => item.activity_id != null).map((activity, i) => {
                                return (
                                    <div className='itinerary__activity-card' key={i}>
                                        <div className='itinerary__sight'>
                                            <h4 className='itinerary__sight-location'>{activity.activity_name}</h4>
                                            <h6 className='itinerary__sight-type'>Activity type:
                                                <span className='itinerary__sight-details'> {activity.activity_type}</span></h6>
                                            <h6 className='itinerary__sight-cost'>Cost:
                                                <span className='itinerary__sight-details'> {activity.cost}</span></h6>
                                        </div>
                                        <div className='itinerary__sight-imgWrapper'>
                                            <img className='itinerary__sight-img' src={activity.activity_image} alt='tour sight image' />
                                        </div>
                                        <div className='itinerary__sight-text'>
                                            <h3 className='itinerary__sight-subtitle'>Description:</h3>
                                            <p className='itinerary__sight-description'> {activity.activity_description}</p>
                                        </div>
                                    </div>

                                )
                            })}
                        </article>

                    )
                })
                }
            </section>
            <Footbar />
        </main>
    )
}

export default Itinerary