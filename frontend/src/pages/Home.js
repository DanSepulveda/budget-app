import ResumeSection from '../components/ResumeSection'
import Transactions from '../components/Transactions'

const Home = ({ lang }) => {
    return (
        <>
            <ResumeSection lang={lang} />
            <Transactions
                lang={lang}
                endpoint=''
                title={{ es: 'Últimos 10 movimientos', en: '10 Latest Transactions' }}
            />
        </>
    )
}

export default Home