import axios from 'axios'
import { useState, useEffect } from 'react'
import { Formik, Form } from "formik"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import NumberInput from './NumberInput'
import * as Yup from 'yup'
import { IoIosCloseCircle } from 'react-icons/io'
import formatDate from "./utils/formatDate"
import Button from "./Button"
import Swal from 'sweetalert2'
import DateInput from './DateInput'

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

    async function saveTransaction(data) {
        let response = await axios.post('http://localhost:4000/api/transactions', data)
    }

    let defaultDate = new Date()
    defaultDate = formatDate(defaultDate).split('/').reverse().join('-')

    return (
        <div className="form-container flex-row-cc">
            <div className="form-section">
                <Formik
                    initialValues={{ description: '', amount: '', category: '', type: '', date: defaultDate }}
                    validationSchema={Yup.object({
                        description: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        amount: Yup.number()
                            .min(0, 'lala')
                            .required('Required'),
                        // type: Yup.string().email('Invalid email address').required('Required'),
                    })}
                    onSubmit={values => saveTransaction(values)}
                >
                    <Form>
                        <IoIosCloseCircle onClick={() => setViewForm(false)} />
                        <TextInput name="description" id="description" label="Concepto" />
                        <NumberInput name="amount" id="amount" label="Monto" />
                        <SelectInput name="category_id" id="category" label="Categoría">
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
                        <DateInput name="date" id="date" label="Fecha" />
                        <Button type="submit">Guardar</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default MovementForm
