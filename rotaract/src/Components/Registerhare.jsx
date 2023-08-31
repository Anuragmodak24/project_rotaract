import React, { useState } from 'react';
import axios from "axios"


export const Signup=()=>{

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  })
  const[show,setShow] = useState(false)
  const handleCheck=()=>{
    setShow(!show)
  }
  
  const hadnleInput=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
    
  }
  const handleSign=(e)=>{
    e.preventDefault()
    uploadData(user)
  }
  const uploadData=(user)=>{
     axios.post("http://127.0.0.1:8001/v1/api/signup",user)
     .then((res)=>alert(res.data))
     .catch((err)=>alert(err.message))

  
  }

  return (
    <div style={{ width: '100%',  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:"20px"
     }}>
      <form onSubmit={handleSign}>
        <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name='name'
            value={user.name}
            onChange={hadnleInput}
          />
        </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            value={user.email}
            onChange={hadnleInput}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={show ? "text" :"password"}
            className="form-control"
            id="exampleInputPassword1"
            name='password'
            value={user.password}
            onChange={hadnleInput}
          />
          <span>Show Password</span>  <input type="checkbox" onChange={handleCheck}/>
        </div>

        <button type="submit" className="btn btn-primary"
        style={{ backgroundColor: '#cf3683', margin: '20px' }}>
        Sing Up
        </button>
       
       <span>Allredy Registered  <a href="/newregister">Log In</a></span>
         
      

      </form>
    </div>
  );
};
  