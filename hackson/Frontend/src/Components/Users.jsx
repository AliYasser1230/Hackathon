import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [users]);
  useEffect(()=>{
    console.log(users);
  },[])

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5050/getdata');
      setUsers(res.data);
    } catch (error) {
      console.log(error.response.body);
    }
  };

  return (
    <div>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(users[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((row, index) => (
              <tr key={row.id}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;