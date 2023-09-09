import React, { useState } from 'react';
import {useNavigate} from 'react-router'
import axios from 'axios';

export const Newregister = () => {
  const navigate=useNavigate()
  
  
  const[luser,setLuser]=useState({
    email:"",
    password:""
  })
  const handleInput=(e)=>{
    const {name,value}=e.target
    setLuser({...luser,[name]:value})
  }
  const handleSubmitLog=(e)=>{
    e.preventDefault()
    logFunc(luser)
  }
  const[show,setShow] = useState(false)
  const handleCheck=()=>{
    setShow(!show)
  }
  
  const logFunc=async(data)=>{
  try {
    let res=await axios.post("http://127.0.0.1:8001/v1/api/login",data)
    alert(res.data.message)
    localStorage.setItem("Token",res.data.token);
    setTimeout(()=>{
      navigate("/donor")
    },1500)
  } catch (error) {
    alert(error.message);
  }
  }
  return (
    <div style={{ width: '100%',  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:"20px"
     }}>
      <form onSubmit={handleSubmitLog}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
               onChange={handleInput}
               name='email'
               value={luser.email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          onChange={handleInput}
          name='password'
          value={luser.password}
            className="form-control"
            id="exampleInputPassword1"
          />
            <span>Show Password</span>  <input type="checkbox" onChange={handleCheck}/>
        </div>

     
        <button type="submit" className="btn btn-primary"
        style={{ backgroundColor: '#cf3683', margin: '20px' }}>
            Log In
        </button><br />
        <span>Do You Want to Sing Up ? <a href="/signup">Sing Up</a></span>
        

      </form>
    </div>
  );
};
