// style, page, components
import './AddDayInfo.scss'
import FormInput from '../FormInput/FormInput'
import FormLabel from '../FormLabel/FormInput/FormLabel'

const AddDayInfo = ({ value }) => {
    return (
        <main>

            <h1>This is day{value}</h1>
            {/* <form>
                <div>
                    <FormLabel forfield={"day"} text={'?'} />
                    <FormInput
                        name={'day'}
                        type={'number'}
                        placeholder={'Add city'}
                        value={basicInfo.city}
                        onchange={basicInfoHandle} />
                </div>

            </form> */}
        </main>
    )
}

export default AddDayInfo