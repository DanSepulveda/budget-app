const ResumeBox = ({ title, lang, mount }) => {
    return (
        <article className="resume-box">
            <h2>{title}</h2>
            <div className="flex-row-sb">
                <img src="/assets/bag.png" alt="" />
                <h3>$1.590</h3>
            </div>
            {title !== 'Saldo' && title !== 'Balance'
                ? <h3>
                    {lang === 'es' ? 'N° Movimientos: ' : 'No. of Transactions: '}
                    {mount}
                </h3>
                : <h3></h3>
            }
        </article>
    )
}

export default ResumeBox