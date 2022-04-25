import React from "react"

class Contact extends React.Component{
    
    constructor(props){
        super(props) // equivaut au this
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    
    render(){
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Contact</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum faucibus massa luctus tempor. Ut sollicitudin molestie commodo. Vestibulum tincidunt ultrices felis vitae pretium. Nulla facilisi. Morbi porttitor ipsum nibh, eu laoreet felis hendrerit ut. Nunc a mattis mauris. Integer ultricies arcu augue, vel laoreet tellus euismod a. Integer ultricies, felis nec ultricies vestibulum, ex lectus interdum sapien, non mattis lacus magna non ipsum. Nam laoreet ultricies libero. Sed sodales massa dolor, nec iaculis dolor faucibus vitae. Donec tincidunt dapibus dolor a cursus. {this.props.name}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
    }
}

export default Contact