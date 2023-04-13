//core stuff
import { useState } from 'react'

// styles, pages, components
import './Activity.scss'
import FormInput from '../FormInput/FormInput'
import FormLabel from '../FormLabel/FormInput/FormLabel'
import Buttons from '../Buttons/Buttons'
import flag from '../../assets/icons/flag.png'
import city from '../../assets/icons/city.png'
import cash from '../../assets/icons/cash.png'
import essay from '../../assets/icons/essay.png'


const Activity = ({ setDayWithAct, dayWithAct, setAllDayAndActivities, allDayAndActivities, onDay }) => {
    // // // each activity set state
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
    const saveInfo = (e, activity) => {

        e.preventDefault()
        // capture activity in state
        setActivity(activity)

        // add the activity to dayWithAct
        setDayWithAct({ ...dayWithAct, activity })

        // setAllDayAndActivities([...allDayAndActivities, dayWithAct])

        setAllDayAndActivities([...allDayAndActivities, { day: onDay, activity }])

        const clickedBtn = e.target
        clickedBtn.classList.add('eachDay__hide')
    }

    console.log(allDayAndActivities)

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

    // adding additional activity
    // const addActivity = (e, activity) => {
    //     e.preventDefault()
    //     // add new activity with unique ID to activity list
    //     setDayWithAct({ ...dayWithAct, activity })

    //     const clickedBtn = e.target
    //     clickedBtn.classList.add('eachDay__hide')

    // }

    return (
        < >
            {/* activity name */}
            <div className='activity__name'>
                <FormLabel forfield={"activity_name"} text={'Name of attraction'} />
                <img src={flag} alt='flag icon' className='activity__icon' />
                <FormInput
                    name={'activity_name'}
                    type={'text'}
                    placeholder={'Add name'}
                    value={activity.activity_name}
                    onchange={activityHandle}
                />
            </div>

            {/* activity type  */}
            <div className='activity__type'>
                <FormLabel forfield={"activity_type"} text={'Please specify an activity category'} />
                <img src={city} alt='city icon' className=' activity__icon' />
                <select
                    className='activity__select'
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
            <div className='activity__cost'>
                <FormLabel forfield={"cost"} text={'Any entrance fee?'} />
                <img src={cash} alt='cash icon' className='activity__icon-cash activity__icon' />
                <FormInput
                    name={'cost'}
                    type={'text'}
                    placeholder={'Add cost'}
                    value={activity.cost}
                    onchange={activityHandle}
                />
            </div>

            {/* activity description */}
            <div className='activity__description'>
                <FormLabel forfield={"activity_description"} text={'Your description'} />
                <img src={essay} alt='essay icon' className='activity__icon' />
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

            <div className='activity__btn-wrapper'>
                <Buttons value={'save'} name={'buttons-white'} btnfunc={(e) => saveInfo(e, activity)} />
                {/* <Buttons value={'Add Activity'} name={'buttons'} btnfunc={(e) => addActivity(e, activity)} /> */}
            </div>

        </>

    )
}

export default Activity