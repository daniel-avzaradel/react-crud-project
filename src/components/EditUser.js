import React, { useContext, useState, useEffect } from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function EditUser(props) {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })
    const {users, editUser} = useContext(GlobalContext)
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/')
    }

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' value={selectedUser.name} name="name" onChange={onChange} placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit' className='edituser-btn'>Edit Name</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}

export default EditUser
