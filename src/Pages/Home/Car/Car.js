import React from "react";
import { useNavigate } from "react-router-dom";
import "./Car.css";
const Car = (props) => {
  const { _id, images, name, price, details, quantity } = props.car;
  const navigate = useNavigate();
  const updateCar = () => {
    navigate(`car/${_id}`);
  };
  return (
    <div className="car">
      
      <img src={images} width="100%" alt="" />
      <h1>{name}</h1>
      <p className="price">starting from &#x09F3; {price}</p>
      <p className="price">Available cars {quantity}</p>
      <p className="details">{details}</p>
      <button className="button" onClick={updateCar}>
        update
      </button>
    </div>
  );
};

export default Car;