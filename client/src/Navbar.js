import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from './Context/DetailsApi';

const Navbar = () => {
  const {authenticated , setAuthenticate} = useUserContext();
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.removeItem("Token");
    setAuthenticate(false);
    navigate('/login');
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid" style={{"color" : "skyblue"}}>
    <a class="navbar-brand text-primary" to={"/"}>Testing react</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-primary" aria-current="page" to={"/"}>Home</Link>
        </li>
        {!authenticated ? <>
        <li class="nav-item">
          <Link class="nav-link text-primary" to={"/register"}> register </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-primary " to={"/login"}> login </Link>
        </li></> : <li class="nav-item">
          <Link class="nav-link text-primary" to={'/login'} onClick={logout} > logout </Link>
        </li>}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
