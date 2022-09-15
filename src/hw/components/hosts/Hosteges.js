import {useState} from "react";
import {Hosteg} from "../host/Hosteg";


export function Hosteges(){
    let [hosteges, setHosteges] = useState([]);
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setHosteges(value.results)
        })
    return (
        <div>
            {
                hosteges.map(hosteg =><Hosteg key={hosteg.id} hosteg={hosteg}/>)
            }

        </div>
    )
}