import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./index.scss"
import { Link } from 'react-router-dom'
const Home = () => {
    const [allProducts, setAllProducts] = useState([])

    const fetchProduct = async ()=>{
        const resp = await axios.get("http://localhost:3000/product")
        setAllProducts(resp.data)
    }
    const deleteProduct = async (id)=>{
        const resp = await axios.delete(`http://localhost:3000/product/${id}`)
    }

    useEffect(() => {
        fetchProduct()
    }, [allProducts])
    
  return (
    <>
    <div className="products">
        {allProducts && allProducts.map(item =>(
        <Link to={`product-detail/${item._id}`}>
        <div>
            <img src={item.image} alt="" />
        <ul>
            <li>Title: {item.title}</li>
            <li>Price: {item.price}</li>
        </ul>
        <button onClick={()=>deleteProduct(item._id)}>X</button>
        </div>
        </Link>
    ))}
    </div>
    </>
  )
}

export default Home