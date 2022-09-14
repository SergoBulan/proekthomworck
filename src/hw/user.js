
export default function User (props){

    let {item:user} = props;

    return (<div>{user.image}

                <h2>{user.id} - {user.name}</h2>
                <p>{user.username} {user.email}</p>

            </div>
    )
}