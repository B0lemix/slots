import aleatorio from "../services/getData"
import {useState,useEffect} from "react"
import Palanca from "./Palanca";




export default function Slot() {

    const [slot_1,setSlot_1]=useState("🚀");
    const [slot_2,setSlot_2]=useState("🚀");
    const [slot_3,setSlot_3]=useState("🚀");
    const [premio,setPremio]=useState(0)
   const [juegos,setJuegos]=useState(0) 
    const [fichas,setFichas]=useState(20)
    const [mensaje_jugada,setMensajeJugada]=useState(" ")
    const [animation_slot1,setAnimationSlot1]=useState("slot_marcos")
    const [animation_slot2,setAnimationSlot2]=useState("slot_marcos")
    const [animation_slot3,setAnimationSlot3]=useState("slot_marcos")





    useEffect(() => {
        setPremio(parseInt(premio));
        // eslint-disable-next-line no-unused-expressions
        (slot_1===slot_2)&&(slot_2===slot_3) ? (setPremio(premio+3), setFichas(fichas+3),setMensajeJugada("Tres coincidencias. Gana 3 fichas")) :
        (slot_1===slot_2)&&(slot_2!==slot_3) ? (setPremio(premio+2),setFichas(fichas+2),setMensajeJugada("Dos coincidencias. Gana 2 fichas"))  :
        (slot_1!==slot_2)&&(slot_2===slot_3) ? (setPremio(premio+2),setFichas(fichas+2),setMensajeJugada("Dos coincidencias. Gana 2 fichas"))  :
        (slot_1!==slot_2)&&(slot_2!==slot_3) ? setMensajeJugada("No tiene premio. Inténtelo de nuevo") :  false


        
    }, [slot_3])

   useEffect(() => {
setMensajeJugada("")

    }, [juegos])
    

    /* const mount_animation = () =>{




        
    }
    

    const dis_mount_animation = () =>{



        
    } */


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



          e.preventDefault();

        setFichas(fichas-1);
        setJuegos(juegos+1);

   

        setTimeout(()=>{    setAnimationSlot1("slot_transition_on animate.pop");
                            setAnimationSlot2("slot_transition_on animate.pop");
                            setAnimationSlot3("slot_transition_on animate.pop")},200)

        setTimeout(()=>{    setSlot_1(aleatorio()); setAnimationSlot1("slot_marcos")},1000)
        setTimeout(()=>{    setSlot_2(aleatorio()); setAnimationSlot2("slot_marcos")},1500)
        setTimeout(()=>{    setSlot_3(aleatorio()); setAnimationSlot3("slot_marcos")},2000)
        

    }



    while(fichas>0){

    return(
        <div>
                <h1>🚀🚀🚀</h1>
                <p>Fichas restantes &rarr; <b>{fichas}</b></p>
              <p>Veces jugadas &rarr; <b>{juegos}</b></p>
                <h3>{mensaje_jugada}</h3>
                    <div className="slots_results">
                        <p  className={"slots_marcos " + animation_slot1}> {slot_1}  </p>
                        <p className={"slots_marcos " + animation_slot2}>{slot_2}</p>
                        <p className={"slots_marcos " + animation_slot3}>{slot_3}</p>
                        <Palanca handleClick={handleClick} />
                       
                    </div>
                        <h2>Sacar Fichas &rarr; <span className="btn_fichas" onClick={() => alert("Ha ganado "+fichas+" fichas.")}>🛎</span></h2>

        </div>
    )};

    fichas===0 ? <h2>No quedan fichas para jugar</h2>  : <p></p>

}

