// core stuff
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// import styles, components, pages
import AddBasicInfo from '../../components/AddBasicInfo/AddBasicInfo'
import AddDayInfo from '../../components/AddDayInfo/AddDayInfo'
import './AddItinerary.scss'
import Nav from '../../components/Nav/Nav'

// core stuff

const AddItinerary = () => {
    // retrieving user data
    const location = useLocation()
    const currentUser = location?.state?.currentUser
    // console.log(setPostSuccessful)

    // form info usestate
    const [basicInfo, setBasicInfo] = useState({
        user_id: currentUser.user_id,
        user_name: currentUser.user_name,
        user_icon: currentUser.user_icon,
        city: '',
        views: 0,
        likes: 0,
        ratings: 0,
        duration: '',
        city_img: '',
        trip_title: '',
        date: '',
        description: ''
    })
    // show day component or nah
    const [showDay, setShowDay] = useState(false)
    const [showBasic, setShowBasic] = useState(true)

    return (
        <main className='addItinerary'>
            <header>
                <Nav />
            </header>
            <AddBasicInfo
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                showDay={showDay}
                setShowDay={setShowDay}
                setShowBasic={setShowBasic}
                showBasic={showBasic}
            />
            <AddDayInfo
                duration={basicInfo.duration}
                showDay={showDay}
                setShowDay={setShowDay}
                basicInfo={basicInfo}
            />
        </main>
    )
}

export default AddItinerary