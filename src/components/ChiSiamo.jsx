/************************** Componente ChiSiamo ****************************/


function ChiSiamo() {

    /***************
        RENDERING
    ****************/ 
    return (
        <div className="container-page">

            <div className="container-flex-left-right">

                {/* Immagine Punto Interrogativo */}
                <div className="container-left">
                    <figure>
                        <img className="img-question" src="./src/assets/img/orange-question.png" alt="immagine marketing" />
                    </figure>
                </div>

                {/* Testo Promozionale */}
                <div className="container-right">
                    <h2> Chi Siamo </h2>
                    <p className="text-promozionale"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi aliquam distinctio accusamus. Totam itaque cum neque temporibus repudiandae debitis eveniet officiis rerum veritatis porro saepe, quisquam tempora eligendi quidem?</p>
                </div>
            </div>

        </div>
    )
}

export default ChiSiamo