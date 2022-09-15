export function Hosteg(props){

    let {hosteg} = props;

    return (

        <div>
            <h1>{hosteg.id} - {hosteg.name}</h1>
            <img src={hosteg.image} alt={hosteg.name}/>
            <p> -{hosteg.status} <br/> -{hosteg.species} <br/> -{hosteg.gender}</p>
        </div>
    )
}
