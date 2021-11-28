const format = (amount, lang) => {
    const language = lang === 'es' ? 'es-CL' : 'en-US'
    const currency = lang === 'es' ? 'CLP' : 'USD'
    const formatter = new Intl.NumberFormat(language, {
        style: 'currency',
        currency,
    });

    return formatter.format(amount, lang)
}

export default format