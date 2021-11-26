import { useField } from 'formik'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <input type="text" id={props.id} {...field} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default TextInput
