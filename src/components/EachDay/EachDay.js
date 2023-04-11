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
    const [activityCount, setActivityCount] = useState(1);

    // setup activitylist per day
    const [activityList, setActivityList] = useState([])


    const [dayWithAct, setDayWithAct] = useState({
        day: onDay,
        // activities: activityList,
    })

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
        clickedBtn.classList.add('eachDay__hide')
    }


    return (
        <section className='eachDay'>
            <h2 className='eachDay__title'> On Day {dayValue} </h2>

            {activityList.map((eachActivity, index) => {
                return (
                    <Activity
                        key={index}
                        activityList={activityList}
                        setActivityList={setActivityList}
                        addActivity={addActivity}
                        setDayWithAct={setDayWithAct}
                        dayWithAct={dayWithAct}
                        activityCount={activityCount}
                        setActivityCount={setActivityCount}
                    />
                )
            })}
            <div className='eachDay__btn'>
                <Buttons value={'Add Activity'} name={'buttons'} btnfunc={(e) => addActivity(e)} />
            </div>
        </section>

    )
}

export default EachDay