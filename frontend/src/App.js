import './App.css';
import React, { useState, useRef } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_deocde from "jwt-decode";

function App() {
  const [user, setuser] = useState('xd');

  return (
    <div className="App">
      <header className="App-header">
      <h3>whats in here 😎....</h3>
      <h1>{user}</h1>
      <GoogleOAuthProvider clientId="850364421534-9f2re6djtki6sm8dh02ml8j0dg11fvih.apps.googleusercontent.com">
     
        <GoogleLogin
          text="signin_with"
          theme="filled_blue"
          size="large"
          ux_mode="popup"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            let userCred = credentialResponse.credential;
            let payload = jwt_deocde(userCred);
            console.log(payload);
            
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
