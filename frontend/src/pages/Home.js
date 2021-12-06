import axios from 'axios'
import { useEffect, useState } from 'react'
import ResumeSection from '../components/ResumeSection'
import Transactions from '../components/Transactions'
import Swal from 'sweetalert2'

const Home = ({ lang }) => {
    const [data, setData] = useState({ resume: null, transactions: null })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let resume = await axios.get('http://localhost:4000/api/resume')
            let transactions = await axios.get('http://localhost:4000/api/transactions/10')
            setData({
                resume: resume.data.response,
                transactions: transactions.data.response
            })
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
        <>
            <ResumeSection lang={lang} data={data.resume} />
            <Transactions
                lang={lang}
                transactions={data.transactions}
                title={lang === 'es' ? 'Últimos movimientos' : 'Latest Transactions'}
            />
        </>
    )
}

export default Home