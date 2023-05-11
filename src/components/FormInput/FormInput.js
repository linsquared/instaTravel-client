import './FormInput.scss'

const FormInput = ({ name, type, value, placeholder, onchange }) => {
    return (
        <input className='form__input'
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onchange}
        />
    )
}

export default FormInput