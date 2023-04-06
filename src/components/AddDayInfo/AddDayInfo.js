// core stuff
import { useState } from 'react'

// style, page, components
import './AddDayInfo.scss'
import EachDay from '../EachDay/EachDay'

const AddDayInfo = ({ duration, showDay }) => {


    return (
        <main style={{ display: showDay ? 'block' : 'none' }}>
            <h1>Let's add some details...</h1>

            {[...Array(Number(duration))].map((day, i) => {
                return (
                    <>
                        <EachDay key={i} dayValue={i + 1} />
                    </>
                )
            }
            )}

        </main>
    )
}

export default AddDayInfo