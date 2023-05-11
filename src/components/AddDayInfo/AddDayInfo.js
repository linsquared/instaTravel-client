// core stuff
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// style, page, components
import './AddDayInfo.scss'
import EachDay from '../EachDay/EachDay'
import Buttons from '../Buttons/Buttons'

const AddDayInfo = ({ duration, showDay, basicInfo }) => {
    const [saveTotal, setSaveTotal] = useState([])
    // // state to hold all the activities in one day together
    const [allDayAndActivities, setAllDayAndActivities] = useState([])
    const navigate = useNavigate()
    // post itinerary and getting itinerary id back
    const saveEntireItinerary = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/itineraries', basicInfo)
            .then(itinerary => {
                // this is the itineraryId
                console.log(itinerary.data)

                // sending all activities and getting them back 
                const activities = allDayAndActivities.map(item => item.activities[0])
                axios.post('http://localhost:8080/itineraries/activity', activities)
                    .then(res => {
                        const data = res.data

                        const updatedData = allDayAndActivities.map(day => {
                            const updatedActivities = day.activities.map(activity => {
                                const matchingActivity = data.find(backEndActivity => backEndActivity.activity_name === activity.activity_name);
                                return matchingActivity.activity_id;
                            });
                            const activityId = updatedActivities[0];
                            return { itinerary_id: itinerary.data, day: day.day, activity_id: activityId };
                        });
                        axios.post('http://localhost:8080/itineraries/activity/day', updatedData)
                            .then(res => {

                                console.log(res)
                            })
                            .catch(err => console.log(err))
                    })

                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        navigate(`/user/${basicInfo.user_id}`)
    }


    return (
        <form className='day'
            onSubmit={saveEntireItinerary}
            style={{ display: showDay ? 'block' : 'none' }}>
            <h1 className='day__title'>Let's add some details...</h1>

            {[...Array(Number(duration))].map((_day, i) => {
                return (
                    <EachDay key={i} dayValue={i + 1}
                        setSaveTotal={setSaveTotal}
                        saveTotal={saveTotal}
                        allDayAndActivities={allDayAndActivities}
                        setAllDayAndActivities={setAllDayAndActivities} />
                )
            }
            )}

            <footer className='day__footer'>
                <div className='day__btn-wrapper'>
                    <Buttons value={'Submit'} name={'buttons-white'} type={'submit'} />
                </div>
            </footer>
        </form>
    )
}

export default AddDayInfo