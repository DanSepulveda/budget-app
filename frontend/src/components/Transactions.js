import { useState, useEffect } from 'react'
import TransactionRow from './TransactionRow'

const Transactions = ({ lang, endpoint, title }) => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {

    }, [])

    return (
        <section className="transaction-container">
            <h1>
                {lang === 'es'
                    ? title.es
                    : title.en
                }
            </h1>
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
        </section>
    )
}

export default Transactions
