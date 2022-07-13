import { useState } from "react"
import palanca from "../resources/palanca.png"

export default function Palanca({handleClick}){


    const [estado_palanca,setEstadoPalanca]=useState(false)
    
    const palanca_on = () => {

        setEstadoPalanca("palanca_on")

    }

    const palanca_off = () => {

        setEstadoPalanca("palanca_off")

    }


    return(

        <img onClick={handleClick} onMouseDown={palanca_off} onMouseUp={palanca_on} src={palanca} alt="No hay imagen" className={estado_palanca}></img>
    )
}