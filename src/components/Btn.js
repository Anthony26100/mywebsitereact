import { useState } from "react";


const Btn = () => {
    let [count,setCount] = useState(0);
    return(
        <button onClick={ () => setCount(count+1) }>Click Frero ! {count} </button>
    )
}

export default Btn