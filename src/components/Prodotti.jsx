/************************** Componente Prodotti ****************************/

import { useState, useEffect } from "react"
import ProdottoCard from "./ProdottoCard";


function Prodotti() {

    /***********
       HOOK
    ***********/

    /* Hook di Stato */
    const [ListaProdotti, setListaProdotti] = useState([]);     // Variabile di stato in cui salviamo i prodotti ritornati dall'API

    /* Hook di Effetto */
    useEffect(() => {
        fetchListaProdotti();       //Chiamata Api al montaggio del componente
    }, []);

    /***************
        RENDERING
    ****************/ 
    return (
        <>
            <div className="container-page container-cards">
                {/* Ciclo la lista dei prodotti e passo ogni oggetto come props al componente figlio ProdottoCard */}
                {ListaProdotti.map( prodotto =>(
                    <ProdottoCard
                        key = {prodotto.id}
                        prodotto = {prodotto}
                    />
                ))}
            </div>
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