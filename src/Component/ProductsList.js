import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {URL} from './url';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let result = await fetch(`${URL}/products`);
        // result = await result.json();
        result = await result.json();
        setProducts(result);
    }


    useEffect(() => {
        getProducts();
    }, [])

    const deleteProduct = async (_id) => {
        var result = await fetch(`${URL}/product/${_id}`, {
            method: 'delete',
        })

        result = await result.json();
        if (result) alert("Record Deleted Successfully");
        getProducts();

    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`${URL}/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        }
        else getProducts();
    }

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <input className="search-product-box" type="text" placeholder="Search product" onChange={searchHandle} />
            <ul><strong>
                <li>Sr.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
                </strong>
            </ul>
            {
                products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button className="deleteButton" onClick={() => deleteProduct(item._id)}>Delete</button>
                            <button className="updateButton"><Link className="linkButton" to={"/update/" + item._id}>Update</Link></button>
                        </li>
                    </ul>
                )
                : <h1>No Record Found!</h1>
            }

        </div>
    )
}

export default ProductList;