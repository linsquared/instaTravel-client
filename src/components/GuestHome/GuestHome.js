// core stuff 
import { useState } from 'react'

// styles, pages, components
import './GuestHome.scss'
import OtherFormIn from '../OtherFormIn/OtherFormIn'
import search from '../../assets/icons/isearch.png'
import sun from '../../assets/icons/sun.png'
import money from '../../assets/icons/money.png'
import beach from '../../assets/images/plan3.jpg'
import emptyHeart from '../../assets/icons/emptyHeart.png'
import pin from '../../assets/icons/pin.png'


const GuestHome = ({ highestRated }) => {
    // searchbar
    const [searchInput, setSearchInput] = useState('')

    // form control 
    const searchHandle = (e) => {
        setSearchInput(e.target.value)
    }

    console.log(highestRated)

    return (

        <section className="guestHome__tab">
            <div className="guestHome__title-wrapper">
                <h1 className='guestHome__title'>Trip</h1>
            </div>

            <div className="guestHome__search-wrapper">
                <OtherFormIn
                    name={'searchInput'}
                    type={'text'}
                    value={searchInput}
                    placeholder={'Search destination...'}
                    onchange={searchHandle} />
                <img src={search} alt='search icon' className='guestHome__search' />
            </div>

            <div className='guestHome__filters'>
                <div className='guestHome__criteria guestHome__criteria--budget'>
                    <img src={money} alt='money icon' className='guestHome__icons' />
                    <h5 className='guestHome__text'>Budget</h5>
                </div>
                <div className='guestHome__criteria guestHome__criteria--duration'>
                    <img src={sun} alt='sun icon' className='guestHome__icons' />
                    <h5 className='guestHome__text'>Duration</h5>
                </div>
            </div>

            <h3 className='guestHome__subtitle'>Recommended</h3>

            <div className='guestHome__recom'>
                {highestRated.map(item => {
                    return (
                        <>
                            <div className='guestHome__card-wrapper'>
                                <div className='guestHome__card'>
                                    <img src={beach} alt='vacation image' className='guestHome__img' />
                                    <img src={emptyHeart} alt='empty heart icon' className='guestHome__heart' />

                                    <div className='guestHome__location-info'>
                                        <div className='guestHome__location'>
                                            <img className='guestHome__pin' src={pin} alt='pin icon' />
                                            <span className='guestHome__city'>{item.city}</span>
                                        </div>

                                        <span className='guestHome__money'>$$$$</span>
                                    </div>
                                </div>
                            </div>

                            <div className='guestHome__card-wrapper'>
                                <div className='guestHome__card'>
                                    <img src={beach} alt='vacation image' className='guestHome__img' />
                                    <img src={emptyHeart} alt='empty heart icon' className='guestHome__heart' />

                                    <div className='guestHome__location-info'>
                                        <div className='guestHome__location'>
                                            <img className='guestHome__pin' src={pin} alt='pin icon' />
                                            <span className='guestHome__city'>City, Country</span>
                                        </div>

                                        <span className='guestHome__money'>$$$$</span>
                                    </div>
                                </div>
                            </div></>
                    )
                })}


            </div>

        </section>
    )
}

export default GuestHome