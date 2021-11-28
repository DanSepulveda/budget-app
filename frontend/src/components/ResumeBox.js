import format from "./utils/format"

const ResumeBox = ({ title, lang, data }) => {
    return (
        <article className="resume-box">
            <h2>{title}</h2>
            <div className="flex-row-sb">
                <img src="/assets/bag.png" alt="" />
                <h3><span>{format(data?.sum || 0, lang)}</span></h3>
            </div>
            {title !== 'Saldo' && title !== 'Balance'
                ? <h3>
                    {lang === 'es' ? 'N° Movimientos: ' : 'No. of Transactions: '}
                    {data?.count}
                </h3>
                : <hr />
            }
        </article>
    )
}

export default ResumeBox