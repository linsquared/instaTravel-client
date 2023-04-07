// core stuff
import { useNavigate, Link } from 'react-router-dom'

// styles, img, pages, components
import './Header.scss'
import logo from '../../assets/logo/logo.png'
import user from '../../assets/icons/user.png'


const Header = ({ value, func }) => {

    const navigate = useNavigate()

    const toLogin = () => {
        navigate('/login')
    }


    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__nav-item'>
                        <img src={logo} alt='logo' className='header__logo' />
                    </li>
                    <li className='header__nav-item'>
                        <div className='header__right'>
                            {func ? <span onClick={func} className='header__log'>{value}</span> :
                                <Link to='/login'><span className='header__log'>{value}</span></Link>}

                            <img src={user} alt='user icon' className='header__user' onClick={toLogin} />
                        </div>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header