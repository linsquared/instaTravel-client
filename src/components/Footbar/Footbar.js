// core stuff
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

// pages, icons, styles
import './Footbar.scss'
import heart from '../../assets/icons/fullHearted.png'
import home from '../../assets/icons/home.png'
import back from '../../assets/icons/back.png'
import userIcon from '../../assets/icons/blueuser.png'
import { UserContext } from '../../context/UserContext'

const Footbar = ({ likesItineraryList }) => {
    // import user context
    const { user } = useContext(UserContext)
    // set navigate
    const navigate = useNavigate()
    // back func
    const goBack = () => {
        navigate(-1)
    }
    // home page
    const goHome = () => {
        navigate('/')
    }
    // like page
    const likePage = () => {
        user ? navigate('/likes', { state: { likesItineraryList } }) : navigate('/login')

    }
    // user home page
    const userHome = () => {
        user ? navigate(`/user/${user.user_id}`) : navigate('/login')
    }

    return (
        <footer className='footbar'>
            <div className='footbar__icon--wrapper' onClick={goBack}>
                <img className='footbar__icon' src={back} alt='back icon' />
            </div>
            <div className='footbar__icon--wrapper' onClick={goHome}>
                <img className='footbar__icon' src={home} alt='home icon' />
            </div>
            <div className='footbar__icon--wrapper' onClick={likePage}>
                <img className='footbar__icon footbar__icon--like' src={heart} alt='like icon' />
            </div>
            <div className='footbar__icon--wrapper' onClick={userHome}>
                <img className='footbar__icon footbar__icon--user' src={userIcon} alt='user icon' />
            </div>
        </footer>
    )
}

export default Footbar