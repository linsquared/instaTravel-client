// core stuff 
import { useState } from 'react'

// styles, pages, components
import './GuestHome.scss'
import OtherFormIn from '../OtherFormIn/OtherFormIn'
import search from '../../assets/icons/isearch.png'
import sun from '../../assets/icons/sun.png'
import money from '../../assets/icons/money.png'
import emptyHeart from '../../assets/icons/emptyHeart.png'
import pin from '../../assets/icons/pin.png'
import Buttons from '../Buttons/Buttons'
import dollar from '../../assets/icons/dollar.png'



const GuestHome = ({ allItineraries }) => {
    // searchbar
    const [searchInput, setSearchInput] = useState('')

    // form control 
    const searchHandle = (e) => {
        setSearchInput(e.target.value)
    }

    // open filter state 
    const [openFilter, setOpenFilter] = useState(false)

    // to open filter options
    const openOptions = () => {
        setOpenFilter(!openFilter)
    }


    const highestRated = allItineraries.filter(item => item.ratings > 4.5)

    // const [filterOptions, setFilterOptions] = useState({
    //     budget: '$',
    //     duration: ''
    // })

    // // form control
    // const filterHandle = (e) => {
    //     const { name, value } = e.target
    //     setFilterOptions({ ...filterOptions, [name]: value })
    // }

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
                <div className='guestHome__criteria guestHome__criteria--budget' onClick={openOptions}>
                    <img src={money} alt='money icon' className='guestHome__icons' />
                    <h5 className='guestHome__text' >Budget</h5>
                </div>
                <div className='guestHome__criteria guestHome__criteria--duration' onClick={openOptions}>
                    <img src={sun} alt='sun icon' className='guestHome__icons' />
                    <h5 className='guestHome__text' >Duration</h5>
                </div>
            </div>

            <section className='guestHome__dropdown' style={{ display: openFilter ? 'block' : 'none' }}>
                <ul className='guestHome__dollar-list'>
                    <li className='guestHome__items guestHome__items-one'>
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                    </li>

                    <li className='guestHome__items guestHome__items-two'>
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                    </li>

                    <li className='guestHome__items guestHome__items-tre'>
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />

                    </li>

                    <li className='guestHome__items guestHome__items-four'>
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                        <img className='guestHome__dollar' src={dollar} alt='dollar icon' />
                    </li>

                </ul>
                <ul className='guestHome__duration-list'>
                    <li className='guestHome__day-item'>1-3D</li>
                    <li className='guestHome__day-item'>4-6D</li>
                    <li className='guestHome__day-item'>7-10D</li>
                    <li className='guestHome__day-item'>10+D</li>

                </ul>
                <div className='guestHome__btn-wrapper'>
                    <Buttons value={'Search'} />
                </div>
            </section>

            <h3 className='guestHome__subtitle'>Recommended</h3>

            <div className='guestHome__recom'>
                {highestRated.map(item => {

                    return (
                        <>
                            <div className='guestHome__card-wrapper'>
                                <div className='guestHome__card'>
                                    <img src={item.city_img} alt='vacation image' className='guestHome__img' />
                                    <img src={emptyHeart} alt='empty heart icon' className='guestHome__heart' />

                                    <div className='guestHome__location-info'>
                                        <div className='guestHome__location'>
                                            <img className='guestHome__pin' src={pin} alt='pin icon' />
                                            <span className='guestHome__city'>{item.city}</span>
                                        </div>

                                        <span className='guestHome__money'>{item.budget}</span>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </div>

        </section >
    )
}

export default GuestHome