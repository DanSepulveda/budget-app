const SelectLang = ({ lang, setLang }) => {
    return (
        <div className="lang-container">
            <img
                src={`/assets/${lang === 'en' ? 'en-lang' : 'en'}.png`}
                alt="English Icon"
                onClick={() => {
                    setLang('en')
                    localStorage.setItem('lang', 'en')
                }}
            />
            <img
                src={`/assets/${lang === 'es' ? 'es-lang' : 'es'}.png`}
                alt="Spanish Icon"
                onClick={() => {
                    setLang('es')
                    localStorage.setItem('lang', 'es')
                }}
            />
        </div>
    )
}

export default SelectLang