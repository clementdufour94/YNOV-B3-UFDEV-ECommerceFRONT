
import React, { useState, useEffect } from 'react'

function AddProduct() {
    const [postId, setPostId] = useState(null);
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id:'18', name: 'React Hooks POST Request Example', description: 'test', photo: 'photo', average_score: 4, price: 5})
        };
        fetch('http://localhost:8000/product/create', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct