// core stuff
import { useState } from 'react'

// import styles, components, pages
import AddBasicInfo from '../../components/AddBasicInfo/AddBasicInfo'
import AddDayInfo from '../../components/AddDayInfo/AddDayInfo'
import './AddItinerary.scss'

// core stuff

const AddItinerary = () => {
    // form info usestate
    const [basicInfo, setBasicInfo] = useState({
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
        <>
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
                setShowDay={setShowDay} />
        </>
    )
}

export default AddItinerary