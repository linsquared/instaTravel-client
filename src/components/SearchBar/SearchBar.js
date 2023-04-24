// core stuff 
import { useNavigate } from 'react-router-dom';

// pages, componetn stye
import './SearchBar.scss'
import OtherFormIn from '../OtherFormIn/OtherFormIn'
import search from '../../assets/icons/isearch.png'



const SearchBar = ({ searchInput, setSearchInput }) => {

    const navigate = useNavigate()

    // func to send search result to result page 
    const sendResults = (e) => {
        e.preventDefault()
        if (searchInput.length === 0) {
            return navigate('city/city', { replace: true })
        } else {
            navigate(`/city/${searchInput}`, { replace: true })
            setSearchInput('')
        }
    }

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
            <img src={search} onClick={sendResults} alt='search icon' className='search__icon' />
        </div>

    )
}

export default SearchBar