import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to={"/"}>Navbar</Link>
                <button class="navbar-toggler" type="button" >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to={"/register"}>Register</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
