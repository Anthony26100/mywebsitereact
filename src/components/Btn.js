import { useState } from "react";


const Btn = (props) => {
    let [count,setCount] = useState(props.start);
    return(
        <button onClick={ () => setCount(count+1) }>Click Frero ! ({count}) </button>
    )
}

export default Btn