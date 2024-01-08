import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams()
    const [productData, setProductData] = useState()
    const fetchOneProduct = async()=>{
        const resp = await axios.get(`http://localhost:3000/product/${id}`)
        setProductData(resp.data)
        console.log(resp.data);
    }
    useEffect(() => {
      fetchOneProduct()
    }, [])
    
  return (
    productData ? <><div>
    <img src={productData.image} alt="" />
    <ul>
        <li>{productData.title}</li>
        <li>{productData.describtion}</li>
        <li>{productData.price}</li>
    </ul>
</div></>:''
  )
}

export default ProductDetailPage