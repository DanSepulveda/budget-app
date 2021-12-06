import axios from 'axios'
import { useState, useEffect } from 'react'
import TransactionRow from '../components/TransactionRow'
import Transactions from '../components/Transactions'
import MovementForm from '../components/MovementForm'
import Button from '../components/Button'
import Swal from 'sweetalert2'

const History = ({ lang }) => {
    const [transactions, setTransactions] = useState({
        expenses: [],
        incomes: []
    })
    const [loading, setLoading] = useState(true)
    const [viewForm, setViewForm] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let response = await axios.get('http://localhost:4000/api/transactions/all')
            setTransactions({
                expenses: response.data.response.filter(trans => trans.type === 'expenses'),
                incomes: response.data.response.filter(trans => trans.type === 'incomes'),
            })
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
            <div className="flex-row-sb record-section">
                <Transactions
                    lang={lang}
                    transactions={transactions.incomes}
                    title={lang === 'es' ? 'Historial de ingresos' : 'Incomes record'}
                />
                <Transactions
                    lang={lang}
                    transactions={transactions.expenses}
                    title={lang === 'es' ? 'Historial de gastos' : 'Expenses record'}
                />
            </div>
        </section>
    )
}

export default History