// core stuff 
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// styles, pages, components
import './GuestHome.scss'
import sun from '../../assets/icons/whiteSun.png'
import money from '../../assets/icons/money.png'
// import emptyHeart from '../../assets/icons/emptyHeart.png'
import pin from '../../assets/icons/pin.png'
import Buttons from '../Buttons/Buttons'
import dollar from '../../assets/icons/dollar.png'
import SearchBar from '../SearchBar/SearchBar'


const GuestHome = ({ allItineraries, setSearchInput, searchInput, searchHandle, tripsTab }) => {

    // open filter state 
    const [openFilter, setOpenFilter] = useState(false)

    // to open filter options
    const openOptions = () => {
        setOpenFilter(!openFilter)
    }

    const highestRated = allItineraries.filter(item => item.ratings > 4.5)

    // state to track the dollar signs
    const [selectedDollarOption, setSelectedDollarOption] = useState('');

    // state to track the duration 
    const [selectedDuration, setSelectedDuration] = useState('');

    const navigate = useNavigate()

    const { itineraryId } = useParams
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

    // func to send all filters into city result page
    const sendFilters = () => {
        if (searchInput.length === 0) {
            navigate('city/city', {
                state: { selectedDollarOption, selectedDuration },
                replace: true
            })
            setSearchInput('')

        } else {
            navigate(`/city/${searchInput}`, {
                state: { selectedDollarOption, selectedDuration },
                replace: true
            })
            setSearchInput('')

        }

    }

    return (

        <section className="guestHome__tab">

            <div className='guestHome__show' style={{ display: tripsTab ? 'block' : 'none' }}>
                <SearchBar
                    searchInput={searchInput}
                    searchHandle={searchHandle}
                    setSearchInput={setSearchInput} />

                <div className='guestHome__filters'>
                    <div className='guestHome__criteria guestHome__criteria--budget' onClick={openOptions}>
                        <img src={money} alt='money icon' className='guestHome__icons' />
                        <h5 className='guestHome__text' >Budget</h5>
                    </div>
                    <div className='guestHome__criteria guestHome__criteria--duration' onClick={openOptions}>
                        <img src={sun} alt='sun icon' className='guestHome__icons' />
                        <h5 className='guestHome__text guestHome__text-duration' >Duration</h5>
                    </div>
                </div>

                <section className='guestHome__dropdown' style={{ display: openFilter ? 'block' : 'none' }}>
                    <ul className='guestHome__dollar-list'>
                        <li className='guestHome__items guestHome__items-one' onClick={() => setSelectedDollarOption('$')} >
                            <img className='guestHome__dollar' src={dollar} alt='$' />
                        </li>

                        <li className='guestHome__items guestHome__items-two' onClick={() => setSelectedDollarOption('$$')}>
                            <img className='guestHome__dollar' src={dollar} alt='$$' />
                            <img className='guestHome__dollar' src={dollar} alt='$$' />
                        </li>

                        <li className='guestHome__items guestHome__items-tre' onClick={() => setSelectedDollarOption('$$$')}>
                            <img className='guestHome__dollar' src={dollar} alt='$$$' />
                            <img className='guestHome__dollar' src={dollar} alt='$$$' />
                            <img className='guestHome__dollar' src={dollar} alt='$$$' />

                        </li>

                        <li className='guestHome__items guestHome__items-four' onClick={() => setSelectedDollarOption('$$$$')} >
                            <img className='guestHome__dollar' src={dollar} alt='$$$$' />
                            <img className='guestHome__dollar' src={dollar} alt='$$$$' />
                            <img className='guestHome__dollar' src={dollar} alt='$$$$' />
                            <img className='guestHome__dollar' src={dollar} alt='$$$$' />
                        </li>

                    </ul>

                    <ul className='guestHome__duration-list'>
                        <li className='guestHome__day-item' onClick={() => setSelectedDuration(3)} >1-3D</li>
                        <li className='guestHome__day-item' onClick={() => setSelectedDuration(4)}>4-6D</li>
                        <li className='guestHome__day-item' onClick={() => setSelectedDuration(7)}>7-10D</li>
                        <li className='guestHome__day-item' onClick={() => setSelectedDuration(11)}>10+D</li>

                    </ul>
                    <div className='guestHome__btn-wrapper'>
                        <Buttons value={'Search'} name={'buttons'} btnfunc={sendFilters} />
                    </div>
                </section>

                <h3 className='guestHome__subtitle'>Recommended</h3>

                <div className='guestHome__recom'>
                    {highestRated.map((item, i) => {

                        return (
                            <>
                                <div className='guestHome__card-wrapper' key={i} onClick={(e) => { sendItinerary(e, item) }}>
                                    <div className='guestHome__card'>
                                        <img src={item.city_img} alt='vacation image' className='guestHome__img' />

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
            </div>
        </section >
    )
}

export default GuestHome