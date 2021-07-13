import React, { useContext, useState } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { v4 as uuid } from 'uuid';
import { Link, useHistory } from 'react-router-dom'

function AddUser() {
    const [name, setName] = useState('')
    const {addUser} = useContext(GlobalContext)
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        history.push('/')
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input value={name} onChange={onChange} type='text' placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit' className='adduser-btn'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}

export default AddUser
