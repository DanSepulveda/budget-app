import ResumeBox from './ResumeBox'

const ResumeSection = ({ lang }) => {
    return (
        <section className="resume-section flex-row-sb">
            <ResumeBox
                title={lang === 'es' ? 'Ingresos' : 'Incomes'}
                lang={lang}
                amount={1000}
            />
            <ResumeBox
                title={lang === 'es' ? 'Saldo' : 'Balance'}
                lang={lang}
                amount={400}
            />
            <ResumeBox
                title={lang === 'es' ? 'Gastos' : 'Expenses'}
                lang={lang}
                amount={600}
            />
        </section>
    )
}

export default ResumeSection