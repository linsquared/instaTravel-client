import './OtherFormIn.scss'

const OtherFormIn = ({ name, type, value, placeholder, onchange }) => {
    return (
        <input className='other__input'
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onchange}
        />
    )
}

export default OtherFormIn