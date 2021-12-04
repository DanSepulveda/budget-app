import { useField } from 'formik'

const NumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <input type="number" id={props.id} {...field} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default NumberInput
