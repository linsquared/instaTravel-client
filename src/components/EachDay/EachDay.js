// core stuff
import { useState } from 'react'

// styles, pages, components
import './EachDay.scss'
import Activity from '../Activity/Activity'
import Buttons from '../Buttons/Buttons'


const EachDay = ({ dayValue }) => {

    // set up day value 
    const [day, setDay] = useState(dayValue)

    const [activityList, setActivityList] = useState([])

    const addActivity = (e) => {
        console.log('clicked')
        e.preventDefault()
        setActivityList([...activityList, <Activity key={activityList.length} />])
    }


    return (
        <>
            <h2> On day {dayValue} </h2>
            {activityList.map((eachActivity, index) => {
                return (
                    <Activity
                        key={index}
                        activityList={activityList}
                        setActivityList={setActivityList}
                        addActivity={addActivity} />
                )
            })}
            <Buttons value={'Add Activity'} btnfunc={addActivity} />
        </>

    )
}

export default EachDay