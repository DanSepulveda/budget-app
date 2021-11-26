const SelectLang = ({ lang, setLang }) => {
    return (
        <div className="lang-container">
            <img
                src={`/assets/${lang === 'en' ? 'en-lang' : 'en'}.png`}
                alt="English Icon"
                onClick={() => setLang('en')}
            />
            <img
                src={`/assets/${lang === 'es' ? 'es-lang' : 'es'}.png`}
                alt="Spanish Icon"
                onClick={() => setLang('es')}
            />
        </div>
    )
}

export default SelectLang