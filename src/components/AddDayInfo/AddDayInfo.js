// core stuff
import { useState } from 'react'
import axios from 'axios'

// style, page, components
import './AddDayInfo.scss'
import EachDay from '../EachDay/EachDay'
import Buttons from '../Buttons/Buttons'

const AddDayInfo = ({ duration, showDay, basicInfo }) => {
    const [saveTotal, setSaveTotal] = useState([])
    // // state to hold all the activities in one day together
    const [allDayAndActivities, setAllDayAndActivities] = useState([])

    const [activityList, setActivityList] = useState([])
    // state to hold itinerary id 
    const [itineraryId, setItineraryId] = useState('')

    const saveEntireItinerary = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/itineraries', basicInfo)
            .then(res => {
                setItineraryId(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        // axios.post()

    }

    console.log(itineraryId)
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