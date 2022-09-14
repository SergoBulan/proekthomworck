import User from "../user";



export default function Users(){
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