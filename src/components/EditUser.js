import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

function EditUser() {
    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit' className='edituser-btn'>Edit Name</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}

export default EditUser
