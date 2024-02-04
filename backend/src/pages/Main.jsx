import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Main.css';

export default function Main() {
  const [user, setUser] = useState([]);

    useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/list');
    setUser(result.data);
  };

  const deleteTeam = async (pid) => {
    await axios.delete(`http://localhost:8080/delete/${pid}`);
    loadUsers();
  };

  return (
    <div className="container">
      <nav className="navbar my-4 navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/data">
            Game Details
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="mainbutton" to="/addDetails">
            Add Details
          </Link>
        </div>
      </nav>

      <div className="py-4">
        <table className="table table-bordered table-striped table-hover border dark shadow">
          <thead class="thread-dark">
            <tr>
              <th scope="col">Game ID</th>
              <th scope="col">Game Name</th>
              <th scope="col">Game Stock</th>
              <th scope="col">Game Price</th>
              <th scope="col">Game Rating</th>
              <th scope="col">Game Genre</th>             
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.productname}</td>
                <td>{user.productstock}</td>
                <td>{user.productprice}</td>
                <td>{user.productrating}</td>
                <td>{user.productimg}</td>
                {/* <td>{user.total_no_of_passengers}</td>
                <td>{user.route}</td>
                <td>{user.busownership}</td>
                <td>{user.time}</td> */}
                <td>
                  <Link className="btnview" to={`/data/${user.pid}`}>
                  VIEW 
                  </Link>
                  {console.log(user.pid)}
                  <Link className="butedit" to={`/edit/${user.pid}`}>
                     EDIT
                  </Link>
                  <button
                    className="btndelete"
                    onClick={() => deleteTeam(user.pid)}
                    >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}