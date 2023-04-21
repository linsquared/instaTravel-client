import './Nav.scss'
import logo from '../../assets/logo/logo.png'
import user from '../../assets/icons/user.png'

// core stuff
import { useNavigate, Link } from 'react-router-dom'

// styles 
import './Nav.scss'
const Nav = ({ value, func, login, handleLogout, userId }) => {

    const navigate = useNavigate()
    // navigate to login page
    const toLogin = () => {
        navigate('/login')
    }
    // navigate to user home page
    const userHome = () => {
        navigate(`/user/${userId}`)
        console.log(userId)
    }
    console.log(login)
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__nav-item'>
                    <Link to={'/'}><img src={logo} alt='logo' className='nav__logo' /></Link>
                </li>
                <li className='nav__nav-item'>
                    <div className='nav__right'>

                        {login ?
                            <>
                                <span onClick={handleLogout} className='nav__log'>Log out</span>
                                <img src={user} alt='user icon' className='nav__user' onClick={userHome} />

                            </>
                            :
                            <>
                                <Link to='/login'><span className='nav__log'>Log in</span></Link>
                                <img src={user} alt='user icon' className='nav__user' onClick={toLogin} />
                            </>
                        }

                    </div>
                </li>

            </ul>
        </nav>
    )
}

export default Nav