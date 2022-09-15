import {prisons} from "../../CrimList";
import {Criminal} from "../crim/Criminal";


export default function Criminals(){
return (
    <div>
        {
            prisons.map(prison =><Criminal key={prison.id} prison={prison}/>)
        }

    </div>
)
}