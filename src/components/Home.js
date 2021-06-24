import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContacts } from '../redux/actions/contactActions';

function Home() {

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();


    const deleteContact = (id) => {
        dispatch(deleteContacts(id));
        toast.success('User successfully Deleted!!');
    }

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between">
                <h3>Home</h3>
                <Link to="/add" className="btn btn-outline-dark">Add User</Link>
            </div>
            <table className="table table-hover mt-4 border text-center">
                <thead className="bg-dark text-white">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contacts.length === 0
                            ? <tr>
                                <td colSpan="5">No Contact Found</td>
                            </tr>
                            : contacts.map((contact, id) => (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-outline-warning me-1 py-0">Edit</Link>
                                        <button onClick={() => deleteContact(contact.id)} className="btn btn-danger ms-1 py-0">Delete</button>
                                    </td>
                                </tr>
                            ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Home
