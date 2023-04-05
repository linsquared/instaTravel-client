import './FormLabel.scss'

const FormLabel = ({ forfield, text }) => {
    return (
        <label className='input__label' htmlFor={forfield}>{text}</label>
    )
}

export default FormLabel