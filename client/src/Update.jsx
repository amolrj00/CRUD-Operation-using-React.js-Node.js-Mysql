import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3030/student/${id}`)
            .then(res => {
                const studentData = res.data;
                setValues({
                    name: studentData.name,
                    email: studentData.email
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3030/student/update/${id}`, values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='form-control'
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='form-control'
                            value={values.email}
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <button type="submit" className='btn btn-success'>Update</button>
                    <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default Update;
