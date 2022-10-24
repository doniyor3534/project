import React, { useContext } from 'react'
import { Context } from './../index';
import { getAuth, signInWithPopup } from "firebase/auth";




export const Login=()=> {
  const {app,provider} = useContext(Context)
  const logIn=()=>{
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
          }).catch((error) => {
            console.log(error);
          });
  }

  // /////////////////////////////////////////


  return (
    <div className='login'>
         <button className="logincard" onClick={logIn}>
             <h1 className="logintext">Google orqali royxatdan utish</h1>
         </button>
    </div>
  )
}
