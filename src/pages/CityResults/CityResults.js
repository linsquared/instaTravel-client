// core stuff 
import { useState } from 'react'

// pages, styles, components
import Nav from '../../components/Nav/Nav'
import SearchBar from '../../components/SearchBar/SearchBar'
import './CityResults.scss'
import unlikeHeart from '../../assets/icons/emptyHeart.png'
import star from '../../assets/icons/star.png'
import locationPin from '../../assets/icons/location.png'
import sortIcon from '../../assets/icons/sort.png'
import starup from '../../assets/icons/startup.png'



const CityResults = ({ allItineraries, searchInput, setSearchInput, searchHandle }) => {
    // search item into lowercase
    const searchItem = searchInput?.toLowerCase()
    // getting the search results
    const searchResults = allItineraries.filter(item => item.city.toLowerCase().includes(searchItem))

    const [sort, setSort] = useState('')

    const sortHandle = (e) => {
        console.log(e);
    }
    return (
        <main className='cityR'>
            <Nav />
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} searchHandle={searchHandle} />
            <div className='cityR__bar'>
                <h2 className='cityR__total'> {searchResults.length} Results</h2>
                <form>
                    {/* <select
                        // className=""
                        // name="sort"
                        // value={sort}
                        // onChange={sortHandle} >
                        // <option value=''>Sort <img src={sortIcon} alt='sort icon' className='cityR__sort-icon' /></option>
                        // <option value='up'
                        //     className='cityR__starUp'>
                        //     <img src={starup} alt='star icon' />
                        // </option>
                        // <option value='down'>Sights & Landmarks</option>
                        // <option value='expensive'>Museums</option>
                        // <option value='cheap'>Observation Deck</option>
                    </select> */}

                </form>
            </div>
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
                                            <img src={result.user_icon} alt='user image' className='cityR__user-img' />
                                        </div>
                                        <span className='cityR__username'>@{result.user_name}</span>
                                    </div>

                                    <div className='cityR__rating-info'>
                                        <img src={star} alt='star icon' className='cityR__star' />
                                        <span className='cityR__rating'>{result.ratings.toFixed(1)}</span>
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