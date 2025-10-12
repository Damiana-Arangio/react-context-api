/************************ Componente Dettagli Prodotto ******************************/

import { useState, useEffect } from "react"                      // import useEffect e useState per recuperare il singolo oggetto dall'API e salvarlo nella variabile di stato "prodotto"
import { useNavigate, useParams } from "react-router-dom";       // import useParams per recuperare l'id dall'URL e useNavigate per ritornare alla lista dei prodotti in caso di errore nella risposta API
import { Link } from "react-router-dom";                         // import Link per icona "freccia torna indietro"

function DettagliProdotto() {

    /***********
        HOOK
    ***********/ 

    /* Hook di Parametro */
    const { id } = useParams();                                                 // Recupero l'id dall'URL

    /* Hook di Stato */
    const [prodottoIsEmpty, setProdottoIsEmpty] = useState(true);               // Flag di stato per tenere traccia se i dati sono stati caricati dall'API 
    const [singoloProdotto, setsingoloProdotto] = useState(prodottoIsEmpty);    // Variabile di stato contentente un singolo prodotto (in base all'id corrente) ritornato dall'API

    /* Hook di Navigazione */
    const navigate = useNavigate();                                             // Riporta l'utente alla lista dei prodotti in caso di di errore nella risposta API 

    /* Hook di Effetto */
    useEffect(() => {
        fetchSingoloProdotto();                                                 //Chiamata Api al montaggio del componente
    }, []);

    /****************
        RENDERING
    ****************/ 
    return (
        <div className="container-page">
            {/* <h1> Fake Store API </h1> */}

            { 
                /* Se l'API non ha risposto -> prodottoIsEmpty === true */
                prodottoIsEmpty ? (
                    <div className="container-loading">
                        <div className="cerchio-loading-rotante">  </div>
                        <span className="scritta-loading"> LOADING </span>
                    </div>
                ) 
                
                /* Se l'API ha risposto -> prodottoIsEmpty === false */
                : (
                    <>
                        <div className="container-flex-left-right">

                            {/* Immagine Prodotto */}
                            <div className="container-left">
                                <figure>
                                    <img className="img-singolo-prodotto" src={singoloProdotto.image} alt="immagine prodotto" />
                                </figure>
                            </div>

                            {/* Dettagli Prodotto */}
                            <div className="container-right">  
                                <ul className="description-singolo-prodotto">
                                    <li> <h3 className="titolo-singolo-prodotto"> {singoloProdotto.title} </h3> </li>
                                    <li> {singoloProdotto.description} </li>
                                    <li className="categoria-singolo-prodotto"> {singoloProdotto.category} </li>
                                    <li className="prezzo"> {singoloProdotto.price} € </li>
                                </ul>

                                {/* Link per tornare alla pagina precedente */}
                                <Link to="/prodotti"> <i className="fa-solid fa-arrow-left"></i> </Link>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )

    /***************
        FUNZIONI
    ***************/

    /* Richiesta API per ottenere il prodotto con id corrente recuperato da URL*/
    function fetchSingoloProdotto() {
        axios.get(`https://fakestoreapi.com/products/${id}`)

            /* Gestione risposta API in caso di successo */
            .then((risSingoloProdotto) => {

                // Simula ritardo di 2 secondi (2000 ms)
                setTimeout(() => {
                    setsingoloProdotto(risSingoloProdotto.data);
                    setProdottoIsEmpty(false);
                }, 2000);
            })

            /* Gestione risposta API in caso di errore */
            .catch((err) => {
                console.error("Errore durante il recupero del prodotto:", err);
                navigate('/prodotti');/* riporta l'utente alla lista dei prodotti */
            });
    }
}

export default DettagliProdotto