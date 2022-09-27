import React, { useContext, useEffect,useState } from 'react'
import { UserContext } from './../context/UserContext';
const Profile = () => {
    const { userID } = useContext(UserContext);
    const [ userInfo, setUserInfo] = useState({});
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${userID}`)
        .then(response =>response.json())
        .then(data=>{
            setUserInfo(data.data);
        })
    },[userID])
    return userID?<div>perfil: {userInfo.email}</div>:<h1>seleccione un usuario</h1>
}

export default Profile