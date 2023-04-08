
// styles, img, pages, components
import './Header.scss'
import Nav from '../Nav/Nav'


const Header = ({ value, func }) => {

    return (
        <header className='header'>
            <Nav value={value} func={func} />
        </header>
    )
}

export default Header