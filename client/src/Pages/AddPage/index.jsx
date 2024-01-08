import axios from 'axios'
import React, { useState } from 'react'

const AddPage = () => {
  const [title, setTitle] = useState()
  const [describtion, setDescribtion] = useState()
  const [image, setImage] = useState()
  const [price, setPrice] = useState()

  const addProduct = async () =>{
    const resp = await axios.post("http://localhost:3000/product",{
      title,
      describtion,
      image,
      price
    })
  }
  return (
    <>
    <h3>Add Page</h3>
    <form action="">
    <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
    <br />
    <input type="text" placeholder='Describtion' onChange={(e)=>setDescribtion(e.target.value)}/>
    <br />
    <input type="text" placeholder='Image' onChange={(e)=>setImage(e.target.value)}/>
    <br />
    <input type="text" placeholder='Price' onChange={(e)=>setPrice(e.target.value)}/>
    <br />
    <button onClick={()=>addProduct()}>add</button>
    </form>
    </>
  )
}

export default AddPage