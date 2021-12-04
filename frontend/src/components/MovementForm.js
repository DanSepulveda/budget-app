import { useState, useEffect } from 'react'
import axios from 'axios'
import { Formik, Form } from "formik"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import NumberInput from './NumberInput'
import * as Yup from 'yup'
import { IoIosCloseCircle } from 'react-icons/io'
import formatDate from "./utils/formatDate"
import Button from "./Button"
import Swal from 'sweetalert2'

const MovementForm = ({ setViewForm, lang }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let response = await axios.get('http://localhost:4000/api/categories')
            setCategories(response.data.response)
        } catch (error) {
            Swal.fire("We're having some problems", "Try Again Later", "error")
        }
    }

    let defaultDate = new Date()
    defaultDate = formatDate(defaultDate).split('/').reverse().join('-')

    return (
        <div className="form-container flex-row-cc">
            <div className="form-section">
                <Formik
                    initialValues={{ description: '', amount: '', category: '', type: '' }}
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
                        <IoIosCloseCircle onClick={() => setViewForm(false)} />
                        <TextInput name="description" id="description" label="Concepto" />
                        <NumberInput name="amount" id="amount" label="Monto" />
                        <SelectInput name="category" id="category" label="Categoría">
                            {categories.map(category =>
                                <option key={category.id} value={category.id}>
                                    {lang === 'es' ? category.nombre : category.name}
                                </option>
                            )}
                        </SelectInput>
                        <SelectInput name="type" id="type" label="Tipo">
                            <option value="entries">Ingreso</option>
                            <option value="expenses">Gasto</option>
                        </SelectInput>
                        {/* <div style={{ marginBottom: '2em' }}>
                            <label htmlFor='date'>Date</label>
                            <input name="date" id="date" type="date" defaultValue={defaultDate} />
                        </div> */}
                        <button type="submit">Guardar</button>
                        <Button type="submit">Guardar</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default MovementForm
