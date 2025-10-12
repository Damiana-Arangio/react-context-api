/************************** Componente Pagina Principale ****************************/

function Home() {

    /***************
        RENDERING
    ***************/
    return(

        <div className="container-page">
           
            {/* <h1> Fake Store API </h1> */}
            <div className="container-flex-left-right">

                {/* Immagine Promozionale */}
                <div className="container-left">
                    <figure>
                        <img className="img-promozionale" src="./src/assets/img/marketing-festività.png" alt="immagine marketing" />
                    </figure>
                </div>

                {/* Testo Promozionale */}
                <div className="container-right">
                    <h2> Benvenuto nel nostro mini e-commerce</h2>
                    <p className="text-promozionale"> Approfitta delle nostre offerte speciali! </p>
                </div>
            </div>
            
        </div>
    )
}

export default Home