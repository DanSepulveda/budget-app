const formatDate = (date) => {
    const formatted = new Date(date)
    return formatted.toLocaleDateString()
}

export default formatDate