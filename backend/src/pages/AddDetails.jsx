import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/AddDetails.css'; // Import the custom CSS file
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddDetails() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    productname: '',
    productstock: '',
    productprice: '',
    productrating: '',
    productimg: ''
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { productname, productstock, productprice, productrating, productimg } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/add",user);
    toast.success("Details added successfully !!!");
    navigate('/main');
  };

  return (
    <>
    <div className="game-theme">
      <div className="row">
        <div className="game-theme">
          <h2 className="text-center m-4">Add Details</h2>
          <form onSubmit={(e) => onSubmit(e)} >
            <div className="form-group">
              <label htmlFor="productname" className="game-label">
                Game Name
              </label>
              <input
                type="text"
                className="form-control game-input"
                placeholder="Enter Game Name"
                name="productname"
                value={productname}
                onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="productstock" className="game-label">
                Game Stock
              </label>
              <input
                type="text"
                className="form-control game-input"
                placeholder="Stock"
                name="productstock"
                value={productstock}
                onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="productprice" className="game-label">
                Game Price
              </label>
              <input
                type="text"
                className="form-control game-input"
                placeholder="Price"
                name="productprice"
                value={productprice}
                onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="productrating" className="game-label">
                Game Ratings
              </label>
              <input
                type="text"
                className="form-control game-input"
                placeholder="Enter Game Ratings"
                name="productrating"
                value={productrating}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productimg" className="game-label">
                Game Genre
              </label>
              <input
                type="text"
                className="form-control game-input"
                placeholder="Game Genre"
                name="productimg"
                value={productimg}
                onChange={(e) => onInputChange(e)}
                />
            </div>

{/* Add button */}

<button className="ui-btn" to ={"/main"}>
  <span>
    Add Details
  </span>
</button>


{/* cancel button */}

            <Link className="Btn" to={"/main"}>
  <div className="sign">
    <svg viewBox="0 0 512 512">
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
    </svg>
  </div>
  <div className="text">Cancel</div>
</Link>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}
