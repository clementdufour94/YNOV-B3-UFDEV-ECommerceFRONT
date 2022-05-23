import React, { useState, useEffect } from "react";

function Test() {

  
  useEffect(() => {
    
    const axios = require('axios').default;
      axios.post('http://localhost:8000/api/login', {
      
      email: "base64cod@mail.com",
      password: "Passwordazert",
    
    }).then(function (response){console.log(response)}).catch(function (error) {
        console.log(error);
      })
   // axios.post('http://localhost:8000/api/product/create', {
    //  name: "title",
     // description: "description",
     // photo: "base64code",
    //  price:1,
   //   quantity: 1
  //  })
     // .then(function (response) {
        
        
     //   let data = JSON.stringify(response.data.id)
     //   axios.post('http://localhost:8000/api/category/create', {
     //     name: data,
      //    identifier: data
     // })
     // .catch(function (error) {
      //  console.log(error);
     // });
        
     // })
      //.catch(function (error) {
        //console.log(error);
      //});
     
      

  });








  return (
    <div>Test</div>
  )
}

export default Test