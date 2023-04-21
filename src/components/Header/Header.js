
// styles, img, pages, components
import './Header.scss'
import Nav from '../Nav/Nav'


const Header = ({ value, func, login, handleLogout, userId }) => {

    return (
        <header className='header'>
            <Nav value={value} func={func}
                login={login}
                handleLogout={handleLogout}
                userId={userId} />
        </header>
    )
}

export default Header