import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Logout = () => {

    const history = useNavigate();

    const handler = async() => {

        await axios.get(
            "https://cute-flannel-nightgown-deer.cyclic.app/api/v1/logout"
        );
        localStorage.removeItem("userInfo");
        history('/')
    }

    handler();


    return (

        <></>
        
    )

}

export default Logout