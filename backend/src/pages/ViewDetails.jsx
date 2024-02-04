import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';

export default function ViewDetails() {
  const [user, setUser] = useState({
    productname: '',
    productstock: '',
    productprice: '',
    productrating: '',
    productimg: ''
  });
  
  const { pid } = useParams();
  console.log(pid);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/data/${pid}`);
      setUser(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Game Vault and Details</h2>

          <div className="card">
            <div className="card-header">
              Details of the Vault:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Game_Name: </b>
                  {user.productname}
                </li>
                <li className="list-group-item">
                  <b>Game_Stock: </b>
                  {user.productstock}
                </li>
                <li className="list-group-item">
                  <b>Game_Price: </b>
                  {user.productprice}
                </li>
                <li className="list-group-item ">
                  <b>Game_Rating: </b>
                  {user.productrating}
                </li>
                <li className="list-group-item">
                  <b>Game_IMG: </b>
                  {user.productimg}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btnview btnview-primary my-2" to="/main">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
</motion.div>
  );
}