import TransactionRow from './TransactionRow'

const Transactions = ({ lang, title, transactions }) => {
    return (
        <section className="transaction-container">
            <h1>
                {lang === 'es' ? title.es : title.en} ({transactions.length})
            </h1>
            {transactions?.map(transaction => <TransactionRow key={transaction.id} data={transaction} lang={lang} />)}
        </section>
    )
}

export default Transactions