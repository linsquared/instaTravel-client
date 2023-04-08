// core stuff 
import { useState } from 'react'

// pages, componetn stye
import './SearchBar.scss'
import OtherFormIn from '../OtherFormIn/OtherFormIn'
import search from '../../assets/icons/isearch.png'



const SearchBar = () => {

    // searchbar
    const [searchInput, setSearchInput] = useState('')

    // form control 
    const searchHandle = (e) => {
        setSearchInput(e.target.value)
    }

    return (

        <div className="search">
            <OtherFormIn
                name={'searchInput'}
                type={'text'}
                value={searchInput}
                placeholder={'Search destination...'}
                onchange={searchHandle} />
            <img src={search} alt='search icon' className='search__icon' />
        </div>

    )
}

export default SearchBar