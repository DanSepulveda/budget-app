const Footer = ({ lang }) => {
    return (
        <footer className="flex-row-cc">
            <span>
                &copy;
                {lang === 'es'
                    ? 'Desarrollado por '
                    : 'Developed by '
                }
                Daniel SepĂșlveda
            </span>
        </footer>
    )
}

export default Footer