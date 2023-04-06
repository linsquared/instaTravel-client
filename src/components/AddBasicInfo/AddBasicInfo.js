// core stuff
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// styles, pages, components
import './AddBasicInfo';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormInput/FormLabel';
import Buttons from '../Buttons/Buttons';
import AddDayInfo from '../AddDayInfo/AddDayInfo'


const AddBasicInfo = () => {

    // form info usestate
    const [basicInfo, setBasicInfo] = useState({
        city: '',
        views: '',
        likes: '',
        ratings: '',
        duration: '',
        city_img: '',
        trip_title: '',
        date: '',
        description: ''
    })




    // form control handler
    const basicInfoHandle = (e) => {
        const { name, value } = e.target

        setBasicInfo(preval => ({
            ...preval, [name]: value
        }))
    }

    // navigate
    const navigate = useNavigate()

    // save this info
    const saveBasicInfo = (e) => {
        e.preventDefault()
        // makesure path is right
        // navigate('/day')

    }

    return (
        <>
            <form onSubmit={saveBasicInfo}>
                {/* location */}
                <div>
                    <FormLabel forfield={"city"} text={'Where did you go ?'} />
                    <FormInput
                        name={'city'}
                        type={'text'}
                        placeholder={'Add city'}
                        value={basicInfo.city}
                        onchange={basicInfoHandle} />
                </div>

                {/* date of your trip */}
                <div>
                    <FormLabel forfield={"city"} text={'When was your trip ?'} />
                    <FormInput
                        name={'date'}
                        type={'date'}
                        placeholder={'Add date'}
                        value={basicInfo.date}
                        onchange={basicInfoHandle} />
                </div>

                {/* budget */}
                <div>
                    <FormLabel forfield={"budget"} text={'Travel expense per day'} />
                    <select
                        className=""
                        name="budget"
                        value={basicInfo.budget}
                        onChange={basicInfoHandle} >
                        <option value=''>Please select one</option>
                        <option value='$'>Less than $80 per day</option>
                        <option value='$$'>$80-$150 per day</option>
                        <option value='$$$'>$150-$300 per day</option>
                        <option value='$$$$'>$300 or more per day</option>
                    </select>

                </div>

                {/* duration */}
                <div>
                    <FormLabel forfield={"duration"} text={'How long was your trip'} />
                    <FormInput
                        name={'duration'}
                        type={'number'}
                        placeholder={'Add trip duration'}
                        value={basicInfo.duration}
                        onchange={basicInfoHandle} />
                </div>

                {/* destination image */}
                <div></div>

                {/* title */}
                <div>
                    <FormLabel forfield={"trip_title"} text={"Create a captivating itinerary title"} />
                    <FormInput
                        name={'trip_title'}
                        type={'text'}
                        placeholder={'Add title'}
                        value={basicInfo.trip_title}
                        onchange={basicInfoHandle} />
                </div>

                {/* brief description */}
                <div>
                    <FormLabel forfield={"description"} text={"Describe your trip in a few sentences"} />
                    <textarea
                        className=""
                        name='description'
                        type='text'
                        placeholder='Add description'
                        value={basicInfo.description}
                        onChange={basicInfoHandle} />
                </div>

                <Buttons value={'Save'} type={'submit'} />
            </form>

            {[...Array(basicInfo.duration)].map((day, i) => <AddDayInfo key={i} value={i} />)}

        </>
    )
}

export default AddBasicInfo