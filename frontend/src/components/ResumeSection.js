import ResumeBox from './ResumeBox'

const ResumeSection = ({ lang }) => {
    return (
        <section className="resume-section flex-row-sb">
            <ResumeBox
                title={lang === 'es' ? 'Ingresos' : 'Incomes'}
                lang={lang}
                mount={1000}
            />
            <ResumeBox
                title={lang === 'es' ? 'Saldo' : 'Balance'}
                lang={lang}
                mount={400}
            />
            <ResumeBox
                title={lang === 'es' ? 'Gastos' : 'Expenses'}
                lang={lang}
                mount={600}
            />
        </section>
    )
}

export default ResumeSection