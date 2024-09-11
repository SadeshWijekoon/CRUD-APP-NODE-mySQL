import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [book,setBook]= useState({
    title:'',
    desc:'',
    price:'',
    cover_pic:'',

  })

  const navigate = useNavigate()

 const handleClick = async (e) =>{

   e.preventDefault()
   try{
     await axios.post("http://localhost:5000/books",book)
     navigate('/books')
   }catch(err){
     console.log(err);
     
   }
 }
  
  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type='text' placeholder='title' onChange={(e)=>setBook((pre)=>({...pre,title:e.target.value}))}/>
      <input type='text' placeholder='desc'onChange={(e)=>setBook((pre)=>({...pre,desc:e.target.value}))}/>
      <input type='number' placeholder='price'onChange={(e)=>setBook((pre)=>({...pre,price:e.target.value}))}/>
      <input type='text' placeholder='cover'onChange={(e)=>setBook((pre)=>({...pre,cover_pic:e.target.value}))}/>
       <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default Add;