// core stuff
import { useState } from 'react'

// styles, pages, components
import './EachDay.scss'
import FormInput from '../FormInput/FormInput'
import FormLabel from '../FormLabel/FormInput/FormLabel'


const EachDay = ({ dayValue }) => {

    // set up day value 
    const [day, setDay] = useState(dayValue)

    // set activity form
    const [activity, setActivity] = useState({
        activity_name: '',
        activity_type: '',
        cost: '',
        activity_description: '',
        activity_image: '',
    })

    // form handle 
    const activityHandle = (e) => {
        const { name, value } = e.target
        setActivity(preval => ({
            ...preval, [name]: value
        }))
        console.log(activity)
    }

    return (
        <>

            <form>
                <h2> On day {dayValue} </h2>

                {/* activity name */}
                <div>
                    <FormLabel forfield={"activity_name"} text={'Name of attraction'} />
                    <FormInput
                        name={'activity_name'}
                        type={'text'}
                        placeholder={'Add name'}
                        value={activity.activity_name}
                        onchange={activityHandle}
                    />
                </div>

                {/* activity type  */}
                <div>
                    <FormLabel forfield={"activity_type"} text={'Please specify an activity category'} />
                    <select
                        className=""
                        name="activity_type"
                        value={activity.activity_type}
                        onChange={activityHandle} >
                        <option value=''>Please select one</option>
                        <option value='Parks'>Parks</option>
                        <option value='Sights & Landmarks'>Sights & Landmarks</option>
                        <option value='Museums'>Museums</option>
                        <option value='Observation Deck'>Observation Deck</option>
                        <option value='Concerts & Shows'>Concerts & Shows</option>
                        <option value='Shopping'>Shopping</option>
                        <option value='Aquariums'>Aquariums</option>
                        <option value='Botanical Garden'>Botanical Garden</option>
                        <option value='Beach'>Beach</option>
                        <option value='Food'>Food</option>
                        <option value='Nightlife'>Nightlife</option>
                        <option value='Cultural activities'>Cultural activities</option>
                        <option value='Others'>Others</option>

                    </select>

                </div>

                {/* activity cost */}
                <div>
                    <FormLabel forfield={"cost"} text={'Any entrance fee?'} />
                    <FormInput
                        name={'cost'}
                        type={'text'}
                        placeholder={'Add cost'}
                        value={activity.cost}
                        onchange={activityHandle}
                    />
                </div>

                {/* activity description */}
                <div>
                    <FormLabel forfield={"activity_description"} text={'Your description'} />
                    <FormInput
                        name={'activity_description'}
                        type={'text'}
                        placeholder={'Add your descriptions'}
                        value={activity.activity_description}
                        onchange={activityHandle}
                    />

                </div>

                {/* activity img */}
                {/* <div>
                            <Buttons value={upload} />
                            </div> */}
            </form>

        </>

    )
}

export default EachDay