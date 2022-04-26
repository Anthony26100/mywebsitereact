const Card = ({id,source,title, width, height}) =>{
    return(
        <div key={id} className="col-12 col-md-4">
            <div className="card">
                <img src={source} className="img-fluid card-img-top mb-2" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text">La largeur de l'image est : {width}px et la hauteur est : {height}px</p>
                        <a href="#"className="btn btn-outline-primary" target="_blank">Télécharger l'image</a>
                    </div>
            </div>
        </div>

    )
}

export default Card