import {Link} from "react-router-dom";
import "./Modal.css"; 

function Modal(props) {

    return(
        <div className="modal">
            <Link to={`/action/acceso/${props.user_id}`}>
                <button className="btn btn-acceso"> Acceso </button>
            </Link>
            <Link to={`/action/rect/${props.user_id}`}>
                <button className="btn btn-rect">Rectificación</button>
            </Link>
                <button className="btn btn-cancel"> Cancelación </button>
                <button className="btn btn-op"> Oposición </button>
        </div>
    );
}

export default Modal;