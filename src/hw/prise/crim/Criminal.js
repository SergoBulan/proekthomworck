export function Criminal(props){

    let {prison} = props;

    return (
        <div>
            <h1>{prison.id} - {prison.name}</h1>
            <img src={prison.image} alt={prison.name}/>
            <p> -{prison.status} <br/> -{prison.species} <br/> -{prison.gender}</p>
        </div>
    )
}


