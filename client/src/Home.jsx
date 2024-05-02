import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/student/all')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3030/student/delete/${id}`)
    .then(res => {
      setData(res.data);
      window.location.reload();
    })
    .catch(err => console.log(err))
}

  return (
    <div className='bg-primary'>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2 className='bg-black text-white'>Student List</h2>
        </div>
        <div className='col text-end'>
          <Link to="/create" className='btn btn-success'>Create +</Link>
        </div>
      </div>

      <table className='table mt-3'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((studentModel, index) => (
            <tr key={index}>
              <td>{studentModel.id}</td>
              <td>{studentModel.name}</td>
              <td>{studentModel.email}</td>
              <td>
                <Link to={`/read/${studentModel.id}`} className='btn btn-primary'>Read</Link>
                <Link to={`/update/${studentModel.id}`} className='btn btn-info mx-2'>Update</Link>
                <Link onClick={() => handleDelete(studentModel.id)} className='btn btn-danger'>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default Home;
