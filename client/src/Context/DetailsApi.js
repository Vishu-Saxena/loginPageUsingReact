import react from react;
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserDetails = (props)=>{
    const name = "mansi";

    const [details , setDetails] = useState([]);



    useEffect(async()=>{
        const res = await axios.get("http://localhost:5000/api/auth/getUserDetails");
        console.log(res);
        
    },[]);

    return <UserContext.Provider value={name}> {props.children} </UserContext.Provider>
}

// custom hook
const useUserContext = ()=> useContext(UserContext);
export default UserDetails;
export{UserContext , useUserContext}