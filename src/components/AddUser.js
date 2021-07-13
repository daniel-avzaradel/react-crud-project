import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

function AddUser() {

    const {addUser} = useContext(GlobalContext)
    const onSubmit = () => {
        
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit' className='adduser-btn'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}

export default AddUser
