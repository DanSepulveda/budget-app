import { useField } from 'formik'

const DateInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <input type="date" id={props.id} {...field} {...props} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default DateInput