import axios from 'axios'
import { useState, useEffect } from 'react'
import TransactionRow from '../components/TransactionRow'
import MovementForm from '../components/MovementForm'
import Button from '../components/Button'
import Swal from 'sweetalert2'

const Transactions = ({ lang }) => {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)
    const [viewForm, setViewForm] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let response = await axios.get('http://localhost:4000/api/transactions')
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
            <Button onClick={() => setViewForm(true)}>
                {lang === 'es' ? "Agregar Movimiento" : "Add Transaction"}
            </Button>
            {viewForm && <MovementForm setViewForm={setViewForm} lang={lang} />}
            {transactions.map(transaction => <TransactionRow key={transaction.id} data={transaction} />)}
        </section>
    )
}

export default Transactions
