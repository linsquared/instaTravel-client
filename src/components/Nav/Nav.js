// core stuff
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'


// styles , pages
import './Nav.scss'
import './Nav.scss'
import logo from '../../assets/logo/logo.png'
import userIcon from '../../assets/icons/user.png'
import { UserContext } from '../../context/UserContext'


const Nav = ({ setFailedAuth }) => {
    const { user, userLogin, userLogout } = useContext(UserContext)
    const navigate = useNavigate()
    // navigate to login page
    const toLogin = () => {
        navigate('/login')
    }

    // logout
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        userLogout(null)
        setFailedAuth(true);
    };

    // navigate to user home page
    const userHome = () => {
        navigate(`/user/${user?.user_id}`, { replace: true })
    }


    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__nav-item'>
                    <Link to={'/'}><img src={logo} alt='logo' className='nav__logo' /></Link>
                </li>
                <li className='nav__nav-item'>
                    <div className='nav__right'>

                        {user ?
                            <>
                                <span onClick={handleLogout} className='nav__log'>Log out</span>
                                <img src={user?.user_icon} alt='user icon' className='nav__user  nav__user--img' onClick={userHome} />

                            </>
                            :
                            <>
                                <Link to='/login'><span className='nav__log'>Log in</span></Link>
                                <img src={userIcon} alt='user icon' className='nav__user' onClick={toLogin} />
                            </>
                        }

                    </div>
                </li>

            </ul>
        </nav>
    )
}

export default Nav