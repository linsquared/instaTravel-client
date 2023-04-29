// core stuff
import { useContext } from 'react'
import { useLocation } from 'react-router-dom';

// pages, styles and img
import './Likes.scss';
import Nav from '../../components/Nav/Nav';
import Footbar from '../../components/Footbar/Footbar';
// import { UserContext } from '../../context/UserContext';
import pin from '../../assets/icons/pin2.png'


const Likes = () => {
    // uselocation
    const location = useLocation()
    const likesItineraryList = location?.state.likesItineraryList

    // const { user } = useContext(UserContext)
    console.log(likesItineraryList)
    return (
        <>
            <Nav />
            <main className='likes'>
                <h1 className='likes__title'>{likesItineraryList?.length === undefined ? 0 : likesItineraryList?.length} liked Itineraries</h1>

                {likesItineraryList?.length === 0 || likesItineraryList?.length === undefined ? '' :
                    <ul className='likes__list'>
                        <li className='likes__item'>
                            <div className='likes__card' >
                                <img alt='city' className='likes__city-img' />
                            </div>
                            <div className='likes__card-text'>
                                <div className='likes__card-info'>
                                    <img src={pin} alt='pin icon' className='likes__pin' />
                                    <span className='likes__location'>NYC</span>
                                </div>

                                <div className='likes__duration'>Duration: days</div>
                            </div>

                        </li>
                    </ul>
                }


                <Footbar />
            </main>
        </>
    )
}

export default Likes