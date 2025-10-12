/* Componente Navbar che gestisce la navigazione tra le pagine */

import { Link, NavLink } from "react-router-dom"                /* Import componenti Link e LinkNav per navigare le pagine */
import { useBudgetContext } from "../contexts/BudgetContext"    /* import dell'hook personalizzato per accedere al context */

/* Array di oggetti per generare dinamicamente i link della Navbar */
const links = [
    {  path: '/', label: 'Home' },
    {  path: '/chi-siamo', label: 'Chi Siamo ' },
    {  path: '/prodotti', label: 'Prodotti' }
]


function Navbar() {

    /* Destrutturazione dei dati globali dal context */
    const { budgetMode, toggleBudgetMode } = useBudgetContext();

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

                    {/* Bottone Attiva/Disattiva modalità Budget al click*/}
                    <li>
                        <button onClick= {toggleBudgetMode} className="ButtonBudgetMode">
                            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                        </button>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar