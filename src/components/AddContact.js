import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { addContacts } from '../redux/actions/contactActions';

function AddContact() {
    const history = useHistory();

    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[phone, setPhone]= useState('');

    const contacts = useSelector((state)=>state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const chackEmail = contacts.find((contact) => contact.email === email && email);
        const chackPhone = contacts.find((contact) => contact.phone === parseInt(phone));
        // console.log(chackEmail);

        if(!name || !email || !phone){
            return toast.warning('Please fill empty field!!');
        }

        if(chackEmail){
            return toast.error('This email already exist!!');
        }

        if(chackPhone){
            return toast.error('This phone already exist!!');
        }

        const data = {
            id: contacts.length,
            name: name,
            email: email,
            phone:phone
        }

        dispatch(addContacts(data));

        toast.success('User successfully Added!!');

        history.push('/');

    }

    return (
        <div className="container my-5">

            <div className="shadow py-4 px-5">
                <h3>Add User</h3>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">Name *</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Name"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email *</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter Email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="phone" class="form-label">Phone No *</label>
                        <input type="number" class="form-control" id="phone" placeholder="Enter Phone No"
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact;
