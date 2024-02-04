import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/EditDetails.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditDetails() {
  const navigate = useNavigate();
  const { pid } = useParams();
  console.log(pid);

  const [user, setUser] = useState({
    productname: '',
    productstock: '',
    productprice: '',
    productrating: '',
    productimg: ''
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/data/${pid}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { productname, productstock, productprice, productrating, productimg } = user;

  const onSubmit = async (e) => {
    console.log("Button clicked");
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/edit/${pid}`, user);
      toast.success("Updated successfully !!!");
      navigate('/main');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="boxingedit">
          <h2 className="text-center m-4">Edit Details</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
            <label htmlFor="productname" className="game-label">
              Game Name
              </label>
              <input
                type="text"
                className="form-controledit border-dark shadow"
                id="productname"
                name="productname"
                value={productname}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productstock" className="form-label">
              Game Stock
              </label>
              <input
                type="text"
                className="form-controledit border-dark shadow"
                id="productstock"
                name="productstock"
                value={productstock}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productprice" className="form-label">
              Game Price
              </label>
              <input
                type="text"
                className="form-controledit border-dark shadow"
                id="productprice"
                name="productprice"
                value={productprice}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cusratings" className="form-label">
              Game Rating
              </label>
              <input
                type="text"
                className="form-controledit border-dark shadow"
                id="productrating"
                name="productrating"
                value={productrating}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cusmobile" className="form-label">
              Game Genre            
              </label>
              <input
                type="text"
                className="form-controledit"
                id="productimg"
                name="productimg"
                value={productimg}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btnedit-upd">
              Update Details
            </button>
            <Link className="cancelbtnedit" to="/main">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}