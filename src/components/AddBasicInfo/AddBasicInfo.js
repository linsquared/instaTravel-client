// core stuff
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// styles, pages, components
import './AddBasicInfo.scss';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormInput/FormLabel';
import Buttons from '../Buttons/Buttons';
import AddDayInfo from '../AddDayInfo/AddDayInfo'
import city from '../../assets/icons/earth.png'
import money from '../../assets/icons/moneyBag.png'
import sun from '../../assets/icons/sun.png'
import title from '../../assets/icons/message.png'
import essay from '../../assets/icons/essay.png'
import calender from '../../assets/icons/calender.png'


const AddBasicInfo = ({ basicInfo, setBasicInfo, setShowDay, setShowBasic, showBasic }) => {
    // form control handler
    const basicInfoHandle = (e) => {
        const { name, value } = e.target

        setBasicInfo(preval => ({
            ...preval, [name]: value
        }))
    }

    // navigate
    const navigate = useNavigate()

    // validation
    const validForm = () => {
        if (!basicInfo.city ||
            !basicInfo.duration ||
            !basicInfo.city ||
            !basicInfo.date ||
            !basicInfo.budget ||
            !basicInfo.trip_title ||
            !basicInfo.description) {
            return false
        } return true
    }
    // err state
    const [err, setErr] = useState(false)

    // save button func
    const saveBasicInfo = (e) => {
        if (validForm()) {
            e.preventDefault()
            setShowBasic(false)
            setShowDay(true)
            console.log(basicInfo)
        } else {
            e.preventDefault()
            setErr(true)
        }
    }

    return (
        <>
            <form onSubmit={saveBasicInfo}
                className='basicInfo'
                style={{ display: showBasic ? 'block' : 'none' }}>
                <h1 className='basicInfo__title'>Let's add some basic informations...</h1>

                {/* location */}
                <div className='basicInfo__city'>
                    <FormLabel forfield={"city"} text={'Where did you travel to?'} />
                    <img src={city} alt='earth icon' className='basicInfo__icon basicInfo__icon-city' />
                    <FormInput
                        name={'city'}
                        type={'text'}
                        placeholder={'Add city'}
                        value={basicInfo.city}
                        onchange={basicInfoHandle} />
                </div>

                {/* date of your trip */}
                <div className='basicInfo__date'>
                    <FormLabel forfield={"city"} text={'When was your trip? (ok to estimate)'} />
                    <img src={calender} alt='calendar icon' className='basicInfo__icon basicInfo__icon-calender' />
                    <FormInput
                        className="basicInfo__calender"
                        name={'date'}
                        type={'date'}
                        placeholder={'Add date'}
                        value={basicInfo.date}
                        onchange={basicInfoHandle} />
                </div>

                {/* budget */}
                <div className='basicInfo__budget'>
                    <FormLabel forfield={"budget"} text={'Travel expenses per day'} />
                    <img src={money} alt='money icon' className='basicInfo__icon basicInfo__icon-budget' />
                    <select
                        className="basicInfo__select"
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
                <div className='basicInfo__duration'>
                    <FormLabel forfield={"duration"} text={'Your trip Length in days'} />
                    <img src={sun} alt='sun icon' className='basicInfo__icon basicInfo__icon-sun' />
                    <div className='basicInfo__duration-num'>
                        <FormInput
                            name={'duration'}
                            type={'number'}
                            placeholder={'Add trip duration'}
                            value={basicInfo.duration}
                            onchange={basicInfoHandle} />
                    </div>
                </div>

                {/* destination image */}
                <div></div>

                {/* title */}
                <div className='basicInfo__trip-title'>
                    <FormLabel forfield={"trip_title"} text={"Create a captivating itinerary title"} />
                    <img src={title} alt='message icon' className='basicInfo__icon basicInfo__icon-message' />
                    <FormInput
                        name={'trip_title'}
                        type={'text'}
                        placeholder={'Add title'}
                        value={basicInfo.trip_title}
                        onchange={basicInfoHandle} />
                </div>

                {/* brief description */}
                <div className='basicInfo__description'>
                    <FormLabel forfield={"description"} text={"Describe your trip in a few sentences"} />
                    <img src={essay} alt='essay icon' className='basicInfo__icon basicInfo__icon-essay' />
                    <textarea
                        className='basicInfo__textarea'
                        name='description'
                        type='text'
                        placeholder='Add description'
                        value={basicInfo.description}
                        onChange={basicInfoHandle} />
                </div>
                {err && <p className='basicInfo__err'>Please fill out all fields.</p>}
                <Buttons name={'buttons'} value={'Save'} type={'submit'} />
            </form>


        </>
    )
}

export default AddBasicInfo