// core stuff 
import { useState } from 'react'
// pages, img,styles
import './CityCard.scss'
import unlikeHeart from '../../assets/icons/emptyHeart.png'
import star from '../../assets/icons/star.png'
import locationPin from '../../assets/icons/location.png'
import heart from '../../assets/icons/fullHearted.png'

const CityCard = ({ img, username, ratings, icon, city, budget, clickFunc, itinerary, setLikesIinteraryList, likesItineraryList, likeIt, setLikeIt }) => {
    // const [likeIt, setLikeIt] = useState(false)

    const likeItinerary = (e) => {
        e.stopPropagation()
        setLikeIt(!likeIt)
        setLikesIinteraryList([...likesItineraryList, itinerary])
    }

    return (
        <div className='citycard__card-wrapper' onClick={clickFunc}>
            <div className='citycard__card'>
                <img src={img} alt='vacation image' className='citycard__img' />
                {/* <div className='cityCard__heart--wrapper'> */}
                <img src={likeIt ? heart : unlikeHeart} alt='empty heart icon'
                    className='citycard__heart'
                    onClick={likeItinerary} />
                {/* </div> */}
                <div className='citycard__user-info'>

                    <div className='citycard__user'>
                        <div className='citycard__icon-wrapper'>
                            <img src={icon} alt='user image' className='citycard__user-img' />
                        </div>
                        <span className='citycard__username'>@{username}</span>
                    </div>

                    <div className='citycard__rating-info'>
                        <img src={star} alt='star icon' className='citycard__star' />
                        <span className='citycard__rating'>{ratings}</span>
                    </div>
                </div>

                <div className='citycard__location-info'>
                    <div className='citycard__location'>
                        <img className='citycard__pin' src={locationPin} alt='pin icon' />
                        <span className='citycard__city'>{city}</span>
                    </div>

                    <span className='citycard__money'>{budget}</span>
                </div>

            </div>
        </div>


    )
}

export default CityCard