import { NavLink } from 'react-router-dom'
import SelectLang from './SelectLang'

const Header = ({ lang, setLang }) => {
    return (
        <header className="flex-row-sb">
            <nav>
                <NavLink exact to="/">
                    {lang === 'es' ? 'Inicio' : 'Home'}
                </NavLink>
                <NavLink to="/transactions">
                    {lang === 'es' ? 'Movimientos' : 'Transactions'}
                </NavLink>
            </nav>
            <SelectLang lang={lang} setLang={setLang} />
        </header>
    )
}

export default Header