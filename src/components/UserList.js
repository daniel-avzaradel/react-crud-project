import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

function UserList() {
    const {users, removeUser} = useContext(GlobalContext)

    return (
        <ListGroup className="mt-4">
        {users.map((user, i) => {
           return(
            <ListGroupItem className="d-flex" key={i}>
                <strong>{user.name}</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning" to={`/edit/${user.id}`}>Edit</Link>
                    <Button onClick={() => removeUser(user.id)} color='danger' style={{marginLeft: '10px'}}>Delete</Button>
                </div>
            </ListGroupItem>
           )
        })}
        </ListGroup>
    )
}

export default UserList