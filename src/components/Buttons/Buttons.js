import './Buttons.scss'

const Buttons = ({ name, value, btnfunc }) => {
    return (
        <button className={name} onClick={btnfunc}>{value}</button>
    )
}

export default Buttons