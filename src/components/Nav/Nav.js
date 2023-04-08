import './Nav.scss'
import logo from '../../assets/logo/logo.png'
import user from '../../assets/icons/user.png'

// core stuff
import { useNavigate, Link } from 'react-router-dom'

// styles 
import './Nav.scss'
const Nav = ({ value, func }) => {

    const navigate = useNavigate()

    const toLogin = () => {
        navigate('/login')
    }

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__nav-item'>
                    <img src={logo} alt='logo' className='nav__logo' />
                </li>
                <li className='nav__nav-item'>
                    <div className='nav__right'>
                        {func ? <span onClick={func} className='nav__log'>{value}</span> :
                            <Link to='/login'><span className='nav__log'>{value}</span></Link>}

                        <img src={user} alt='user icon' className='nav__user' onClick={toLogin} />
                    </div>
                </li>

            </ul>
        </nav>
    )
}

export default Nav