import Love from "../components/Love"
import Btn from "../components/Btn"

const Home = () => {
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Home</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn />
                        <Love name="coding"/>
                        <Love name="smooking weed everythings 🤯🚬"/>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum faucibus massa luctus tempor. Ut sollicitudin molestie commodo. Vestibulum tincidunt ultrices felis vitae pretium. Nulla facilisi. Morbi porttitor ipsum nibh, eu laoreet felis hendrerit ut. Nunc a mattis mauris. Integer ultricies arcu augue, vel laoreet tellus euismod a. Integer ultricies, felis nec ultricies vestibulum, ex lectus interdum sapien, non mattis lacus magna non ipsum. Nam laoreet ultricies libero. Sed sodales massa dolor, nec iaculis dolor faucibus vitae. Donec tincidunt dapibus dolor a cursus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home