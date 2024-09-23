import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: '',
    cover_pic: '',
  });

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/books/${id}`, book);
      console.log('Update successful:', response.data);
      navigate('/books');
    } catch (err) {
      console.error('Error updating book:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className='form'>
      <h1>Update Book</h1>
      <input
        type='text'
        placeholder='Title'
        value={book.title} // Reflect the state in the input
        onChange={(e) => setBook((prev) => ({ ...prev, title: e.target.value }))}
      />
      <input
        type='text'
        placeholder='Description'
        value={book.desc} // Reflect the state in the input
        onChange={(e) => setBook((prev) => ({ ...prev, desc: e.target.value }))}
      />
      <input
        type='number'
        placeholder='Price'
        value={book.price} // Reflect the state in the input
        onChange={(e) => setBook((prev) => ({ ...prev, price: e.target.value }))}
      />
      <input
        type='text'
        placeholder='Cover Picture URL'
        value={book.cover_pic} // Reflect the state in the input
        onChange={(e) => setBook((prev) => ({ ...prev, cover_pic: e.target.value }))}
      />
      <button className="formButton" onClick={handleClick}>UPDATE</button>
    </div>
  );
};

export default Update;
