/* Componente Navbar che gestisce la navigazione tra le pagine */

/* Import componenti Link e LinkNav per navigare le pagine */
import { Link, NavLink } from "react-router-dom"

/* Array di oggetti per generare dinamicamente i link della Navbar */
const links = [
    {  path: '/', label: 'Home' },
    {  path: '/chi-siamo', label: 'Chi Siamo ' },
    {  path: '/prodotti', label: 'Prodotti' }
]

function Navbar() {

    /***************
        RENDERING
    ****************/ 
    return(
        <>
            {/* Barra di Navigazione Principale */}
            <nav>
                <ul>
                    { links.map( (link) => (
                        <li key={link.path}>
                            <NavLink to={link.path}> {link.label} </NavLink>
                        </li>
                     ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar