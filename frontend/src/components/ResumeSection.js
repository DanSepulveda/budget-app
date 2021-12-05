import ResumeBox from './ResumeBox'

const ResumeSection = ({ lang, data }) => {

    return (
        <section className="resume-section">
            <ResumeBox
                title={lang === 'es' ? 'Ingresos' : 'Incomes'}
                lang={lang}
                data={data?.incomes}
            />
            <ResumeBox
                title={lang === 'es' ? 'Saldo' : 'Balance'}
                lang={lang}
                data={{ sum: data?.resume }}
            />
            <ResumeBox
                title={lang === 'es' ? 'Gastos' : 'Expenses'}
                lang={lang}
                data={data?.expenses}
            />
        </section>
    )
}

export default ResumeSection