import React, { useState } from "react";
import {URL} from './url';

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const addProduct = async () => {

        if(!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        
        let result = await fetch(`${URL}/add-product`, {
            method:"post",
            body: JSON.stringify({name, price, category, company, userId}),
            headers:{
                'content-type':"application/json"
            }
        })

        result = await result.json();
        alert("Product Added Successfully");
        console.log(result);
    }

    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputbox" type="text" placeholder="Enter product name" value={name} onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input className="inputbox" type="number" placeholder="Enter product price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input className="inputbox" type="text" placeholder="Enter product category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input className="inputbox" type="text" placeholder="Enter product company" value={company} onChange={(e) => { setCompany(e.target.value) }} />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            

            <button onClick={addProduct} className="appbutton">Add Product</button>
        </div>
    )
}

export default AddProduct;
