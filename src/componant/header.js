import React from 'react';
import { LOGO, NAVBAR_IMG } from '../img/image';
import { IoLogOutOutline } from "react-icons/io5";



const Header = () => {
  return (
    <>
    <section className='header'>
    <div className='container'>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="login"><img className='header-img' src={LOGO}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/dashboard">
          <button type="button" className="btn btn-outline-primary">Manage Client</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/updateprofile">
          <button type="button" className="btn btn-outline-primary">Update Profile</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resetpassword">
          <button type="button" className="btn btn-outline-primary">Reset Password</button>
          </a>
        </li>
      </ul>
      <form className="d-flex header-flex">
      <a className="nav-link" href="/login">
      <button type="button" className="btn btn-outline-primary me-4 mt-2">
      <IoLogOutOutline className='me-2' />Logout</button>
      </a>
      <a class="navbar-brand" href="/">
      <img src={NAVBAR_IMG} alt=""  className="rounded-pill lownloade-img"/> 
    </a>
      </form>
    </div>
  </div>
</nav>
</div>
    </section>
    </>
  )
}

export default Header;