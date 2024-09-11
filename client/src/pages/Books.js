import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Books = () => {
  const [books,setBooks] = useState([])

  useEffect(()=>{
   const fetchAllBook = async()=>{
    try{
      const res = await axios.get('http://localhost:5000/books')
      setBooks(res.data)
      
      
    }catch(err){
      console.log(err);
      
    }
   }
   fetchAllBook()
  },[])
  return (
    <div>
      <h1>Sadesh Book Shop</h1>
       {books.map((book)=>(
        <div className='book' key={book.id}>
          {book.cover_pic && <img src={book.cover} alt=''/>} 
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>{book.price}</span>
        </div>
       ))}
       <button><Link to ='/add'>ADD NEW BOOK</Link></button>
    </div>
  )
}

export default Books;