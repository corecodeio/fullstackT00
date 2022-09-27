import React, { useContext, useEffect } from 'react'
import { DataContext } from './../context/DataContext';
import { UserContext } from './../context/UserContext';
import Table from 'react-bootstrap/Table';

const ListUsers = () => {
    const { listUsers, setListUsers, page, setPageTotal } = useContext(DataContext);
    const { setUserID } = useContext(UserContext);
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then(respone => respone.json())
            .then(data => {
                console.log(data);
                setListUsers(data.data)
                setPageTotal(data.total_pages)
            })
    }, [page])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <th>ver mas</th>
                </tr>
            </thead>
            <tbody>
                {listUsers.map(user => {
                    return (
                        <tr key={`user-${user.id}`}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <img src={user.avatar} alt='avatar' />
                            </td>
                            <th>
                                <button onClick={() => setUserID(user.id)}>ver mas</button>
                            </th>
                        </tr>)
                })}
            </tbody>
        </Table>
    )
}

export default ListUsers