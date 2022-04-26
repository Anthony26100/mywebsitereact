import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();

    const loadInfo = () => {
        fetch("https://picsum.photos/id/"+id+"/info")
        .then( response => response.json())
        .then( data =>{
            console.log(data);
        })
    }

    useEffect(()=>loadInfo,[]);
    return(
        <div className="row">
            <div className="cold">
            <h1>Details de l'image {id}</h1>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Details