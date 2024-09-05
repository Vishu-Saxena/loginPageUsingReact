import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Registration = () => {
    const[userDetails , setUser] = useState({name : "" , email : "" , password :""});
    const navigate = useNavigate();
    // fucntion to handle onchange 
    const handleOnChange=(e)=>{
        let {name , value} = e.target;
        setUser( {...userDetails , [name] : value});
    }

    // function to handle onClick
    const handleOnclick= async(e)=>{
        e.preventDefault();
        console.log(userDetails);
        const res = await axios.post('http://localhost:5000/api/auth/register' , userDetails);
        if(res?.data?.success){
            window.alert("registered successfully");
            navigate('/login')
        }else{
            res?.data?.message ?  window.alert(res.data.message) : window.alert("not registered");
            navigate('/register');
        }
        
    }
    
  return (
    <div  className='container'>
        <h1 className='text-center text-primary mt-4'>Registration form</h1>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-6 mt-5">
      <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input  autocomplete="off" onChange={handleOnChange} type="email" name='email' className="form-control" id="exampleInputEmail1"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input  autocomplete="off" onChange={handleOnChange} type="text" name='name' className="form-control" id="exampleInputName"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input  autocomplete="off" onChange={handleOnChange} type="password" name='password' className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" onClick={handleOnclick} className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Registration
