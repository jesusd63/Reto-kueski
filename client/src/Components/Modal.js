import {Link} from "react-router-dom";
import "./Modal.css"; 

function Modal(props) {

    return(
        <div className="modal">
            <Link to={`/action/acceso/${props.user_id}`}>
                <button className="btn"> Acceso </button>
            </Link>
            <Link to={`/action/rect/${props.user_id}`}>
                <button className="btn">Rectificación</button>
            </Link>
                <button className="btn"> Cancelación </button>
                <button className="btn"> Oposición </button>
        </div>
    );
}

export default Modal;