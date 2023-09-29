import { useState } from "react";
import {UserList} from "./componentes/userList"


export const UsersApp = () => {

    const [endPoint,setendPoint] = useState('users')

    const handleFetch = () => {
        setendPoint('comments')
    }

    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Llamando a las apiss</button>
        </>
    )
}
