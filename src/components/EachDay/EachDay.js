// core stuff
import { useState } from 'react'

// styles, pages, components
import './EachDay.scss'
import Activity from '../Activity/Activity'
import Buttons from '../Buttons/Buttons'


const EachDay = ({ dayValue, setAllDayAndActivities, allDayAndActivities }) => {

    // set up day value 
    const [onDay, setOnDay] = useState('')

    // state to hold each activity with the day is on
    const [dayWithAct, setDayWithAct] = useState([])

    // set each activity count
    const [activityCount, setActivityCount] = useState(1);

    const handleAddActivity = (e) => {
        e.preventDefault()
        setActivityCount(activityCount + 1);
    };


    // func to see how many activity to add 
    const renderActivities = (day) => {
        const activities = [];
        for (let i = 0; i < activityCount; i++) {
            activities.push(
                <Activity
                    key={i}
                    setDayWithAct={setDayWithAct}
                    dayWithAct={dayWithAct}
                    dayValue={dayValue}
                    setAllDayAndActivities={setAllDayAndActivities}
                    allDayAndActivities={allDayAndActivities}
                    setOnDay={setOnDay}
                    onDay={onDay}
                    day={day}
                />
            );
        }
        return activities;
    };


    return (
        <section className='eachDay'>

            <div className='activity' >


                {Array.of(dayValue).map((day, i) => {
                    return (
                        <>
                            <h2 className='eachDay__title' key={i + 1}> On Day {day}</h2>
                            {renderActivities(day)}

                            <div className='eachDay__btn'>
                                <Buttons value={'Add Activity'} name={'buttons'} btnfunc={handleAddActivity} />
                            </div>
                        </>
                    )
                })
                }

            </div>
        </section>

    )
}

export default EachDay