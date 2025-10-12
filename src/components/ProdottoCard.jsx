/************************** Componente Card Prodotto ****************************/

import { Link } from "react-router-dom";    // importo componente link da React Router

function ProdottoCard(props) {

    /* Destrutturazione oggetto props */
    const {prodotto} = props;

    /***************
        RENDERING
    ****************/ 
    return(
        <>
            {/* Link che racchiude l’intera card e reindirizza a DettagliProdottoPage */ }
                     
            <div className="card">
                <Link to={`/prodotti/${prodotto.id}`} >

                <div>
                    {/* Immagine Prodotto */}
                    <div className="container-img-prodotto">
                        <figure> 
                            <img className="img-prodotto" src={prodotto.image} alt={prodotto.title}/> 
                        </figure>
                    </div>

                    {/* Descrizione Prodotto */}
                    <ul className="description-card">
                        <li className="titolo-prodotto"> {prodotto.title} </li>
                        <li> {prodotto.category} </li>
                        <li className="prezzo"> {prodotto.price} € </li>
                    </ul>
                </div>
                
                </Link>
            </div>
            
        </>
        
    )
}

export default ProdottoCard