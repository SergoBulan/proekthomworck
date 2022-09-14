export default function User (props){

    let {item:user} = props;

    return (<div>{user.image}
                <h2>{user.id} - {user.name}</h2>
                <p>{user.status}, {user.gender}, {user.species}</p>
            </div>
    )
}