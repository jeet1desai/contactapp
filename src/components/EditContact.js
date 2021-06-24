import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { updateContacts } from '../redux/actions/contactActions';


function EditContact() {
    const history = useHistory();

    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const contacts = useSelector((state) => state);
    const currContact = contacts.find((contact) => contact.id === parseInt(id));
    const dispatch = useDispatch();

    useEffect(()=>{
        setName(currContact.name);
        setEmail(currContact.email);
        setPhone(currContact.phone);
    }, [currContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const chackEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
        const chackPhone = contacts.find((contact) => contact.id !== parseInt(id) && contact.phone === parseInt(phone));
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
            id: parseInt(id),
            name: name,
            email: email,
            phone:phone
        }

        dispatch(updateContacts(data));

        toast.success('User successfully Updated!!');

        history.push('/');

    }

    return (
        <div className="container my-5">
            <div className="shadow py-4 px-5">
                {
                    currContact ? (
                        <>
                            <h3>Edit User {id}</h3>
                            <hr />
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
                                <button type="submit" class="btn btn-warning me-2">Update</button>
                                <Link to="/" className="btn btn-outline-danger">Cancel</Link>
                            </form>
                        </>
                    ) : (
                        <><h3>Edit User with Id {id} is not present!!</h3></>
                    )
                }

            </div>
        </div>
    )
}

export default EditContact
