/************************** Componente Prodotti ****************************/

import { useState, useEffect } from "react"
import ProdottoCard from "./ProdottoCard";
import { useBudgetContext } from "../contexts/BudgetContext"    /* import dell'hook personalizzato per accedere al context */


function Prodotti() {

    /***********
        HOOK
    ***********/

    /* Hook di Stato */
    const [ListaProdotti, setListaProdotti] = useState([]);     // Variabile di stato in cui salviamo i prodotti ritornati dall'API

    /* Hook di Effetto */
    useEffect(() => {
        fetchListaProdotti();   // Chiamata API al montaggio del componente
    }, []);

    /* Destrutturazione dei dati globali dal context */
    const { budgetMode } = useBudgetContext();

    /*************
        FILTRO
    *************/
    let prodottiFiltrati = [...ListaProdotti];                // Crea copia dell'array "ListaProdotti" che servirà per mostrare i dati filtrati in base alla modalità Budget

    if (budgetMode) {
        prodottiFiltrati = ListaProdotti.filter(prodotto => prodotto.price <= 30)      /* Se la modalità Budget è attiva, aggiorna l'array "prodottiFiltrati" filtrando solo i prodotti con prezzo ≤ 30 */

    }

    /***************
        RENDERING
    ****************/ 
    return (
        <>
            {
                <div>
                    {/* Cambia testo h2 in basa alla modalità budget (attiva/disattiva) */}
                    <h2> {budgetMode ? "Prodotti economici (prezzo ≤ 30€)" : "Tutti i prodotti disponibili"} </h2>
                        <div className="container-page container-cards">
                        {prodottiFiltrati.map(prodotto => (
                                <ProdottoCard
                                    key={prodotto.id}
                                    prodotto={prodotto}
                                />
                            ))}
                        </div>
                </div>
            }   
        </>
    )

    /***************
        FUNZIONI
    ****************/

    /* Richiesta API per ottenere la lista dei prodotti */
    function fetchListaProdotti() {
        axios.get("https://fakestoreapi.com/products")
            .then(risListaProdotti => setListaProdotti(risListaProdotti.data))
            .catch(risErrore => console.error(risErrore))
    }
}

export default Prodotti