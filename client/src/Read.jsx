import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Read() {
    const { id } = useParams();
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3030/student/${id}`)
            .then(res => {
                console.log(res)
                setStudent(res.data);
            })
            .catch(err => console.log(err))
    }, [id]); 
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Student Details</h2>
                <div className='p-2'>
                <h2>{student.id}</h2>
                <h2>{student.name}</h2>
                <h2>{student.email}</h2>
                </div>
                <Link to='/' className='btn btn-primary me-2'>Back</Link>
                <Link to={`/update/${student.id}`} className='btn btn-info'>Update</Link>
            </div>
        </div>
    )
}

export default Read
