import React, { useEffect } from 'react';
import { useUserContext } from './Context/DetailsApi';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let {details , authenticated} = useUserContext();
    const navigate = useNavigate();
    console.log(details);

    useEffect(()=>{
        if(!authenticated){
            window.alert("Please first log in your self")
            navigate('/login');
        }
    },[authenticated]);
    
  return (
    <div className='container'>
        { authenticated ? <>
        <h4 className='text-center mt-5 text-primary'> Here's is the list of all users </h4>
        <div className="row mt-3">
            <div style={{"margin" : "auto"}} className="col-sm-10">

           
      <table class="table text-center table-striped">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {details ? details.map(( ele , indx )=>{ return <tr>
                <th scope="row"> {indx+1} </th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                </tr>}) : "loading...."}
                
            </tbody>
        </table>
        </div>
        </div>
        </> : <h1> </h1>  }
    </div>
  )
}

export default Home
