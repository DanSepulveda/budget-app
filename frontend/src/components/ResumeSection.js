import axios from 'axios'
import { useState, useEffect } from 'react'
import ResumeBox from './ResumeBox'
import Swal from 'sweetalert2'

const ResumeSection = ({ lang }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let response = await axios.get('http://localhost:4000/api/transactions/resume')
            setData(response.data.response)
        } catch (error) {
            Swal.fire("We're having some problems", "Try Again Later", "error")
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <section className="resume-section flex-row-cc">
                <h1 style={{ textAlign: 'center' }}>{lang === 'es' ? 'Cargando' : 'Loading'}</h1>
            </section>
        )
    }

    return (
        <section className="resume-section flex-row-sb">
            <ResumeBox
                title={lang === 'es' ? 'Ingresos' : 'Incomes'}
                lang={lang}
                data={data?.incomes}
            />
            <ResumeBox
                title={lang === 'es' ? 'Saldo' : 'Balance'}
                lang={lang}
                data={{ sum: data?.resume }}
            />
            <ResumeBox
                title={lang === 'es' ? 'Gastos' : 'Expenses'}
                lang={lang}
                data={data?.expenses}
            />
        </section>
    )
}

export default ResumeSection