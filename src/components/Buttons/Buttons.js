import './Buttons.scss'

const Buttons = ({ value, btnfunc }) => {
    return (
        <button className='buttons' onClick={btnfunc}>{value}</button>
    )
}

export default Buttons