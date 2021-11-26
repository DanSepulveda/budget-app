import { Formik, Form } from "formik"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import * as Yup from 'yup'

const MovementForm = () => {
    return (
        <div>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={values => console.log(values)}
            >
                <Form>
                    <TextInput name="concept" id="concept" label="Concepto" />
                    <TextInput name="mount" id="mount" label="Monto" />
                    <TextInput name="date" id="date" label="Fecha" />
                    <SelectInput name="hola" id="hola" label="Tipo">
                        <option value="entry">Ingreso</option>
                        <option value="spend">Gasto</option>
                    </SelectInput>
                    <input type="date" defaultValue="2021-11-26" />
                </Form>
            </Formik>
        </div>
    )
}

export default MovementForm
