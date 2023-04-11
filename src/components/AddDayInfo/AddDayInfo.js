// core stuff
import { useState } from 'react'

// style, page, components
import './AddDayInfo.scss'
import EachDay from '../EachDay/EachDay'
import Buttons from '../Buttons/Buttons'

const AddDayInfo = ({ duration, showDay }) => {

    const saveEntireItinerary = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <main className='day'
            onSubmit={saveEntireItinerary}
            style={{ display: showDay ? 'block' : 'none' }}>
            <h1 className='day__title'>Let's add some details...</h1>

            {[...Array(Number(duration))].map((day, i) => {
                return (
                    <EachDay key={i} dayValue={i + 1} />
                )
            }
            )}

            <footer className='day__footer'>
                <div className='day__btn-wrapper'>
                    <Buttons value={'Submit'} name={'buttons-white'} type={'submit'} />
                </div>
            </footer>
        </main>
    )
}

export default AddDayInfo