import ResumeSection from '../components/ResumeSection'
import Transactions from '../components/Transactions'

const Home = ({ lang }) => {
    return (
        <>
            <ResumeSection lang={lang} />
            <Transactions
                lang={lang}
                endpoint='http://localhost:4000/api/transactions/10'
                title={{ es: 'Últimos 10 movimientos', en: '10 Latest Transactions' }}
            />
        </>
    )
}

export default Home