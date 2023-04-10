// core stuff 
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

// pages, styles, components
import Nav from '../../components/Nav/Nav'
import SearchBar from '../../components/SearchBar/SearchBar'
import './CityResults.scss'
import sortIcon from '../../assets/icons/sort.png'
import starup from '../../assets/icons/starup.png'
import starDown from '../../assets/icons/stardown.png'
import moneyUp from '../../assets/icons/moneyup.png'
import moneyDown from '../../assets/icons/moneydown.png'
import CityCard from '../../components/CityCard/CityCard'


const CityResults = ({ allItineraries, searchInput, setSearchInput, searchHandle }) => {
    // search item into lowercase
    const searchItem = searchInput?.toLowerCase()
    // getting the search results
    const searchResults = allItineraries.filter(item => item.city.toLowerCase().includes(searchItem))

    const [sort, setSort] = useState('')

    // opening sorting function
    const [openSort, setOpenSort] = useState(false)

    // click to drop down sort options
    const sortHandle = () => {
        setOpenSort(!openSort)
    }

    // unpack duration and budget selections from previous page
    const location = useLocation()
    const selectedDuration = location.state.selectedDuration
    const selectedBudget = location.state.selectedDollarOption

    let initalResult;

    const sortByBudgetAndDuration = () => {
        // filter entire list by budget selection
        const filteredBudget = selectedBudget && allItineraries.filter(item => item.budget === selectedBudget)
        const filteredBudgetWithCity = selectedBudget && searchResults.filter(item => item.budget === selectedBudget)

        // NO particular city, YES budget and YES duration
        if (!searchInput && selectedBudget && selectedDuration) {
            return initalResult = filteredBudget.filter(item => {
                if (selectedDuration === 3) {
                    return item.duration <= 3
                } else if (selectedDuration === 4) {
                    return item.duration > 3 && item.duration <= 6
                } else if (selectedDuration === 7) {
                    return item.duration > 6 && item.duration <= 10
                } else if (selectedDuration === 11) {
                    return item.duration > 10
                }
            })
            // NO particular city, NO budget and YES duration
        } else if (!searchInput && !selectedBudget && selectedDuration) {
            return initalResult = allItineraries.filter(item => {
                if (selectedDuration === 3) {
                    return item.duration <= 3
                } else if (selectedDuration === 4) {
                    return item.duration > 3 && item.duration <= 6
                } else if (selectedDuration === 7) {
                    return item.duration > 6 && item.duration <= 10
                } else if (selectedDuration === 11) {
                    return item.duration > 10
                }
            })
            // NO particular city, YES budget and NO duration
        } else if (!searchInput && selectedBudget && !selectedDuration) {
            return initalResult = filteredBudget

            // YES particular city, NO budget and NO duration
        } else if (searchInput && !selectedBudget && !selectedDuration) {
            return initalResult = searchResults

            // YES particular city, YES budget and NO duration
        } else if (searchInput && selectedBudget && !selectedDuration) {
            return initalResult = filteredBudgetWithCity
        }    // YES particular city, NO budget and YES duration
        else if (searchInput && !selectedBudget && selectedDuration) {
            return initalResult = searchResults.filter(item => {
                if (selectedDuration === 3) {
                    return item.duration <= 3
                } else if (selectedDuration === 4) {
                    return item.duration > 3 && item.duration <= 6
                } else if (selectedDuration === 7) {
                    return item.duration > 6 && item.duration <= 10
                } else if (selectedDuration === 11) {
                    return item.duration > 10
                }
            })
        }    // YES particular city, YES budget and YES duration
        else if (searchInput && selectedBudget && selectedDuration) {
            return initalResult = filteredBudgetWithCity.filter(item => {
                if (selectedDuration === 3) {
                    return item.duration <= 3
                } else if (selectedDuration === 4) {
                    return item.duration > 3 && item.duration <= 6
                } else if (selectedDuration === 7) {
                    return item.duration > 6 && item.duration <= 10
                } else if (selectedDuration === 11) {
                    return item.duration > 10
                }
            })
            // NO particular city, NO budget and NO duration
        } else if (!searchInput && !selectedBudget && !selectedDuration) {
            initalResult = searchResults
        }

        return initalResult
    }

    sortByBudgetAndDuration()

    // sort results
    let sortedResults = initalResult;

    if (sort === 'lowest') {
        sortedResults = initalResult.sort((a, b) => a.ratings - b.ratings);
    } else if (sort === 'highest') {
        sortedResults = initalResult.sort((a, b) => b.ratings - a.ratings);
    } else if (sort === 'cheapest') {
        sortedResults = initalResult.sort((a, b) => a.budget.length - b.budget.length);
    } else if (sort === 'expensive') {
        sortedResults = initalResult.sort((a, b) => b.budget.length - a.budget.length);
    }

    return (
        <main className='cityR'>
            <Nav />
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} searchHandle={searchHandle} />

            <div className='cityR__bar'>
                <h2 className='cityR__total'> {sortedResults ? sortedResults.length : initalResult.length} Results</h2>

                <div className="cityR__sort" onClick={sortHandle}>
                    <img className="cityR__sortIcon" src={sortIcon} alt='sort icon' />
                </div>

                <ul className="cityR__sort-list" style={{ display: openSort ? 'block' : 'none' }}>
                    <li className="cityR__sort-item">
                        <img src={starup} alt="star up icons" className="cityR__rating--up " onClick={() => setSort('lowest')} />
                    </li>

                    <li className="cityR__sort-item">
                        <img src={starDown} alt="star down icons" className="cityR__rating cityR__rating-down" onClick={() => setSort('highest')} />
                    </li>

                    <li className="cityR__sort-item">
                        <img src={moneyUp} alt="money up icons" className="cityR__rating" onClick={() => setSort('cheapest')} />
                    </li>

                    <li className="cityR__sort-item">
                        <img src={moneyDown} alt="money down icons" className="cityR__rating" onClick={() => setSort('expensive')} />
                    </li>

                </ul>

            </div>
            <section className='cityR__results'>

                {sortedResults.map((result, i) => {
                    return (
                        <CityCard key={i}
                            img={result.city_img}
                            username={result.user_name}
                            ratings={result.ratings}
                            icon={result.user_icon}
                            city={result.city}
                            budget={result.budget} />
                    )
                })
                }
            </section>
        </main>)
}

export default CityResults