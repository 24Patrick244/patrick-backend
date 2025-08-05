import React, { useState } from 'react';
import axios from 'axios';

function UploadProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/products', {
        name,
        price,
        image: imageUrl
      });

      if (res.data.success) {
        setStatus('✅ Product uploaded successfully!');
        setName('');
        setPrice('');
        setImageUrl('');
      } else {
        setStatus('❌ Upload failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Server error');
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        /><br />
        <button type="submit">Upload</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default UploadProduct;
