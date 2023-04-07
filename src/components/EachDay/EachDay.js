// core stuff
import { useState } from 'react'

// styles, pages, components
import './EachDay.scss'
import Activity from '../Activity/Activity'
import Buttons from '../Buttons/Buttons'


const EachDay = ({ dayValue }) => {

    // set up day value 
    const [onDay, setOnDay] = useState(dayValue)

    // set up counter for activity IDs
    const [activityCount, setActivityCount] = useState(0);

    // setup activitylist per day
    const [activityList, setActivityList] = useState([])


    const [dayWithAct, setDayWithAct] = useState({
        day: onDay,
        // activities: activityList,
    })

    console.log(dayWithAct)

    // adding additional activity 
    const addActivity = (e, activity) => {
        e.preventDefault()
        // update activity ID counter
        setActivityCount(activityCount + 1);
        // concatenate counter with string to form activity ID
        const activityId = 'activity_id' + activityCount;
        // add new activity with unique ID to activity list
        setActivityList([...activityList, { activity_id: activityId, ...activity }])
        setDayWithAct({ ...dayWithAct, activityList })
        const clickedBtn = e.target
        clickedBtn.classList.add('eachday__hide')
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
                        addActivity={addActivity}
                        setDayWithAct={setDayWithAct}
                        dayWithAct={dayWithAct} />
                )
            })}
            <Buttons value={'Add Activity'} btnfunc={(e) => addActivity(e)} />
        </>

    )
}

export default EachDay