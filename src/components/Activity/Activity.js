//core stuff
import { useState } from 'react'

// styles, pages, components
import './Activity.scss'
import FormInput from '../FormInput/FormInput'
import FormLabel from '../FormLabel/FormInput/FormLabel'
import Buttons from '../Buttons/Buttons'

const Activity = ({ activityList, setActivityList, addActivity, setDayWithAct, dayWithAct }) => {
    // each activity set state
    const [activity, setActivity] = useState({
        activity_name: '',
        activity_type: '',
        cost: '',
        activity_description: '',
        activity_image: '',
    })
    // form control 
    const activityHandle = (e) => {
        const { name, value } = e.target
        setActivity(prevActivity => ({
            ...prevActivity, [name]: value
        }))
    }
    // save info btn
    const saveInfo = (e, item) => {
        e.preventDefault()
        setActivity(item)
        const clickedBtn = e.target
        clickedBtn.classList.add('eachday__hide')

    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     addActivity(activity)
    //     setActivity({
    //         activity_name: '',
    //         activity_type: '',
    //         cost: '',
    //         activity_description: '',
    //         activity_image: '',
    //     })
    // }



    return (
        <form>
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
            <div >
                <Buttons value={'save'} btnfunc={(e) => saveInfo(e, activity)} />
                <Buttons value={'Add Activity'} btnfunc={(e) => addActivity(e, activity)} />
            </div>

        </form>

    )
}

export default Activity