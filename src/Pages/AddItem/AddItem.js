import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./AddItem.css";
const AddItem = () => {
  const [name, setName] = useState([]);
  // const [email, setEmail] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState([]);
  const [user] = useAuthState(auth);
  const email=user.email
  const onNameBlur = (e) => {
    setName(e.target.value);
  };
  const onPriceBlur = (e) => {
    setPrice(parseInt(e.target.value));
  };
  const onQuantityBlur = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const onImageBlur = (e) => {
    setImages(e.target.value);
  };
  const onDetailsBlur = (e) => {
    setDetails(e.target.value);
  };

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = { name, email, price, quantity, images, details };

    fetch("https://young-thicket-66309.herokuapp.com/car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
  };

  return (
    <div className="add-item-container">
      <h1>Add Inventory Item</h1>
      <div className="form-container">
        <Form onSubmit={addNewItem}>
          <Form.Group className="m-3">
            <Form.Label>Enter TV Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Example : SMART-QLED"
              required
              onBlur={onNameBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Enter TV Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Example : &#x09F3; 10000000"
              required
              onBlur={onPriceBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Enter TV Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Example : 200"
              required
              onBlur={onQuantityBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>TV Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Details about TV"
              required
              onBlur={onDetailsBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>TV Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://example.com"
              required
              onBlur={onImageBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              readOnly
            />
          </Form.Group>

          <input type="submit" value="Add Item +" className="link" />
        </Form>
      </div>
    </div>
  );
};

export default AddItem;