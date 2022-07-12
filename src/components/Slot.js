import aleatorio from "../services/getData"
import {useState,useEffect} from "react"
import palanca from "../palanca.png"



export default function Slot() {

    const [slot_1,setSlot_1]=useState("🚀");
    const [slot_2,setSlot_2]=useState("🚀");
    const [slot_3,setSlot_3]=useState("🚀");
    const [premio,setPremio]=useState(0)
    const [fichas,setFichas]=useState(20)
    const [estado_palanca,setEstadoPalanca]=useState(false)



    useEffect(() => {
        setPremio(parseInt(premio));
        // eslint-disable-next-line no-unused-expressions
        (slot_1===slot_2)&&(slot_2===slot_3) ? (setPremio(premio+3), setFichas(fichas+3)) :
        (slot_1===slot_2)&&(slot_2!==slot_3) ? (setPremio(premio+2),setFichas(fichas+2))  :
        (slot_1!==slot_2)&&(slot_2===slot_3) ? (setPremio(premio+2),setFichas(fichas+2))  :
        (slot_1!==slot_2)&&(slot_2!==slot_3) ? false :  false


        
    }, [slot_3])
    


    const handleClick= (e) => {
/* 
        var a, b, c;

a = 6;
b = 7;
c = a !== b ? (a = 1, b = 2) : (a = 2);
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
 */





        setFichas(fichas-1);

        e.preventDefault();


        setTimeout(()=>{    setSlot_1(aleatorio())},500)
        setTimeout(()=>{    setSlot_2(aleatorio())},1000)
        setTimeout(()=>{    setSlot_3(aleatorio())},1500)
        

    }

    const palanca_on = () => {

        setEstadoPalanca("palanca_on")

    }

    const palanca_off = () => {

        setEstadoPalanca("palanca_off")

    }


    while(fichas>0){

    return(
        <div>
                <h1>🚀🚀🚀</h1>
                <p>Fichas restantes : {fichas}</p>
                    <div className="slots_results">
                        <p  className="slots_marcos">{slot_1}</p>
                        <p className="slots_marcos">{slot_2}</p>
                        <p className="slots_marcos">{slot_3}</p>
                        <img onClick={handleClick} onMouseDown={palanca_off} onMouseUp={palanca_on} src={palanca} alt="No hay imagen" className={estado_palanca}></img>
                    </div>
                        <h2>{premio}</h2>

        </div>
    )};

    fichas===0 ? <h2>No quedan fichas para jugar</h2>  : <p></p>

}

