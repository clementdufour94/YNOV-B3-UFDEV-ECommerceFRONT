import React, { useState, useEffect } from "react";

function Test() {
    const [postId, setPostId] = useState(null);
    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            
              //name: "clement",
              
              email: "clement.dufourl@gmail.com",
              password: "Azertyuiop94",
              //password_confirmation: "Azertyuiop94"
            }),
          };
          fetch("http://localhost:8000/api/login", requestOptions)
            .then((response) => response.json())
            .then((data) => setPostId(data.id));
        
    }, []);
    


  return (
    <div>Test</div>
  )
}

export default Test