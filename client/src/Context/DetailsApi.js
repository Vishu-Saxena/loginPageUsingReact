import React from 'react';

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserDetails = (props)=>{
    
    const [details , setDetails] = useState([]);
    const [authenticated, setAuthenticate] =  useState( localStorage.getItem("Token") ? true : false );

    const fetchingRec=async()=>{
        if(authenticated){
            const res = await axios.get("http://localhost:5000/api/auth/getUserDetails");
            console.log(res.data.message);
            if(res?.data?.success){
                setDetails(res.data.message);
            }
        }        
    }

    useEffect(()=>{  
        fetchingRec();
    },[authenticated]);

    return <UserContext.Provider value={{details , authenticated , setAuthenticate}}> {props.children} </UserContext.Provider>
}

// custom hook
const useUserContext = ()=> useContext(UserContext);
export default UserDetails;
export{UserContext , useUserContext}