import axios from 'axios'
import { useState, useEffect } from 'react'
import TransactionRow from './TransactionRow'
import Swal from 'sweetalert2'

const Transactions = ({ lang, endpoint, title }) => {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let response = await axios.get(endpoint)
            setTransactions(response.data.response)
        } catch (error) {
            Swal.fire("We're having some problems", "Try Again Later", "error")
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <section className="transaction-container">
                <h1>{lang === 'es' ? 'Cargando' : 'Loading'}</h1>
            </section>
        )
    }

    return (
        <section className="transaction-container">
            <h1>
                {lang === 'es' ? title.es : title.en}
            </h1>
            {transactions.map(transaction => <TransactionRow key={transaction.id} data={transaction} lang={lang} />)}
        </section>
    )
}

export default Transactions