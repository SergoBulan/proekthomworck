import User from "../user";
// import {users} from "../UsersList";
import {useState} from "react";


export default function Users(){
    let [users,setUsers] = useState([]);


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => { setUsers(value) });

    return (
        <div>

            {users.map(user =>(<User item={user} key={user.id}/>))}

        </div>
    )
}

//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів
// https://jsonplaceholder.typicode.com/users