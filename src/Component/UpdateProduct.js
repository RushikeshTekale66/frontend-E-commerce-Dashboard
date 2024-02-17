
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {URL} from './url';

const UpdateProduct = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const params = useParams();
  const navigate = useNavigate();



  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`${URL}/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);

  }

  useEffect(() => {
    getProductDetails();
  }, [])

  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`${URL}/product/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'content-type': 'application/json'
      }
    })
    result = await result.json();
    navigate('/');
    console.log(result);
  }



  return (
    <div className="product">
      <h1>Update Product</h1>
      <input className="inputbox" type="text" placeholder="Enter product name" value={name} onChange={(e) => { setName(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter product price" value={price} onChange={(e) => { setPrice(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter product category" value={category} onChange={(e) => { setCategory(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter product company" value={company} onChange={(e) => { setCompany(e.target.value) }} />

      <button onClick={updateProduct} className="appbutton">Update Product</button>
    </div>
  )
}

export default UpdateProduct;