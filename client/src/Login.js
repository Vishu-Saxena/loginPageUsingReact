import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useUserContext } from './Context/DetailsApi';
const Login = () => {

    const [userDetails , setUser] = useState({email : "" , password : "" } )
    const {setAuthenticate} = useUserContext();

    const navigate = useNavigate();
    // fucntion to handle onchange 
    const handleOnChange=(e)=>{
        let {name , value} = e.target;
        setUser( {...userDetails , [name] : value})
    }

    // function to handle onClick
    const handleOnclick=async(e)=>{
        console.log(userDetails);        
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/auth/login" , userDetails);
        if(res?.data?.success){
            localStorage.setItem("Token" , res.data.Token);
            setAuthenticate(true);
            alert(res.data.message);
           navigate('/');
        }else{
            res?.data?.message ? alert(res.data.message) : alert("not logged in");
        }
        console.log(res);
        
    }
    
  return (
    <div  className='container'>
        <h1 className='text-center text-primary mt-4'>Login form</h1>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-6 mt-5">
      <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input  autocomplete="off" onChange={handleOnChange} type="email" name='email' className="form-control" id="exampleInputEmail1"/>
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

export default Login
