import './App.css';
import React, { useState, useRef } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_deocde from "jwt-decode";

function App() {
  const [user, setuser] = useState('xd');

  const submited = async (e) =>{
    e.preventDefault();
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
         body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    postData('https://arye321-medcheck-g4gvvxr4c9rxj-8000.githubpreview.dev/test', { name: "asdf" })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
      // setuser(data.stringify())
    });
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='formdiv'>
          <form onSubmit={submited}>
            <label for="fname">First name:</label><br/>
              <input type="text" id="fname" name="fname" value="John"/><br/>
                <input type="submit" value="Submit"/>
          </form>
        </div>
        
        <h3>whats in here 😎....</h3>
        <h1>{user}</h1>
      </header>

    </div>
  );
}

export default App;
