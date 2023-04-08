// core stuff 
import { useLocation } from 'react-router-dom'

// pages, styles, components
import Nav from '../../components/Nav/Nav'
import SearchBar from '../../components/SearchBar/SearchBar'
import './CityResults.scss'
import unlikeHeart from '../../assets/icons/emptyHeart.png'
import fake from '../../assets/images/plan3.jpg'
import star from '../../assets/icons/star.png'
import locationPin from '../../assets/icons/location.png'


const CityResults = ({ allItineraries }) => {
    // search input passed dwon from previous page
    const location = useLocation()
    const searchItem = (location.state.searchInput).toLowerCase()

    // getting the search results
    const searchResults = allItineraries.filter(item => item.city.toLowerCase().includes(searchItem))

    console.log(searchResults)
    return (
        <main className='cityR'>
            <Nav />
            <SearchBar />
            <h2 className='cityR__total'> {searchResults.length} Results</h2>
            <section className='cityR__results'>
                {searchResults.map(result => {
                    return (
                        <div className='cityR__card-wrapper' >
                            <div className='cityR__card'>
                                <img src={result.city_img} alt='vacation image' className='cityR__img' />
                                <img src={unlikeHeart} alt='empty heart icon' className='cityR__heart' />

                                <div className='cityR__user-info'>

                                    <div className='cityR__user'>
                                        <div className='cityR__icon-wrapper'>
                                            <img src='' alt='user image' className='cityR__user-img' />
                                        </div>
                                        <span className='cityR__username'>@{result.user_name}</span>
                                    </div>

                                    <div className='cityR__rating-info'>
                                        <img src={star} alt='star icon' className='cityR__star' />
                                        <span className='cityR__rating'>{result.ratings}</span>
                                    </div>
                                </div>

                                <div className='cityR__location-info'>
                                    <div className='cityR__location'>
                                        <img className='cityR__pin' src={locationPin} alt='pin icon' />
                                        <span className='cityR__city'>{result.city}</span>
                                    </div>

                                    <span className='cityR__money'>{result.budget}</span>
                                </div>

                            </div>
                        </div>

                    )
                })}

            </section>
        </main>)
}

export default CityResults