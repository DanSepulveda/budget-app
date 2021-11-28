import { useState, useEffect } from 'react'
import axios from 'axios'
import TransactionRow from './TransactionRow'

const Transactions = ({ lang, endpoint, title }) => {
    const [transactions, setTransactions] = useState([])

    useEffect(async () => {
        try {
            let response = await axios.get(endpoint)
            setTransactions(response.data.response)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <section className="transaction-container">
            <h1>
                {lang === 'es'
                    ? title.es
                    : title.en
                }
            </h1>
            {transactions.map(transaction => <TransactionRow key={transaction.id} data={transaction} />)}
        </section>
    )
}

export default Transactions
