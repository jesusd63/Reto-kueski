import { useParams } from "react-router-dom";

function Acceso(){
    const routeParams= useParams();
    return(
        <div>
            <h1>Hello World</h1>
            <h1>{routeParams.id}</h1>
        </div>
    );
}

export default Acceso;