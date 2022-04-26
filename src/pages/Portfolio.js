import { useEffect, useState } from "react";
import Card from "../components/Card";

const Portfolio = () => {
// on déclare la variable joke ET ça fonction/méthode setJoke 
// les deux en même temps grâce au hook useState()
    let [joke,setJoke] = useState('');
    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then( data => {
            setJoke(data.value);
            console.log(data);
        });
    }

    let [gallery,setGallery] = useState([]);
    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page=2&limit=6").then(response => response.json()).then( data => {
            setGallery(data);
            console.log(data);
        });
    }

    

// useEffect est une hook
// qui permet d'accéder ici à l'état 'compentDidMount' du composant
// Comme le ngOnInit
    useEffect( () => {
        loadJoke();
        loadPics();
    
    },[] );
    

    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Portfolio</h1>
                    
                </div>
                <div className="row">
                    <div className="col">
                    <button onClick={loadJoke}>Chuck Norris </button>
                    <p>{joke}</p>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum faucibus massa luctus tempor. Ut sollicitudin molestie commodo. Vestibulum tincidunt ultrices felis vitae pretium. Nulla facilisi. Morbi porttitor ipsum nibh, eu laoreet felis hendrerit ut. Nunc a mattis mauris. Integer ultricies arcu augue, vel laoreet tellus euismod a. Integer ultricies, felis nec ultricies vestibulum, ex lectus interdum sapien, non mattis lacus magna non ipsum. Nam laoreet ultricies libero. Sed sodales massa dolor, nec iaculis dolor faucibus vitae. Donec tincidunt dapibus dolor a cursus.
                        </p>
                    </div>
                </div>
                <div className="row">
                    
                    {
                    gallery.map(
                        pic => {
                            let source = `https://picsum.photos/id/${pic.id}/640/400`
                            let title = `Picture by ${pic.author}`;
                            let id = pic.id;
                            let height = pic.height
                            let width = pic.width
                            return(
                                <Card key={id} source={source} title={title} height={height} width={width} />
                            )
                            }
                    )
                        
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio