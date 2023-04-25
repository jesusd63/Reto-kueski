import "./Access.css";
import {useParams, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import axios from "axios";


function Access () {
    const [user, setUser] = useState({});

    const {USER_ID} = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:3001/action/acceso/${USER_ID}`)
            .then((resp) => setUser({...resp.data[0]}));
    }, [USER_ID]);

    const routeParams = useParams();
	return (
        <div>
            <h1>Acceso</h1>
        </div>
    );
}

export default Access;