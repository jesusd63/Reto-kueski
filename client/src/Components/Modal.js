import {Link} from "react-router-dom";
import "./Modal.css"; 

function Modal(props) {

    function cancelHandler(){
        props.OnCancel();
    }

    function confirmHandler(){
        props.OnConfirm();
    }

    return(
        <h1>Acción terminada</h1>
        
    );
}

export default Modal;
