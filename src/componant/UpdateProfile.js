import React from 'react'
import Header from './header';
import { Link } from 'react-router-dom';
import Button from './Button';

const UpdateProfile = () => {
  return (
    <>
     <Header/>
     <div className='container'>
     <h1>Update Profile</h1>
     <div class="container">
     <div class="row justify-content-center">
       <div class="col-lg-6">
         <form className='update-form'>
         <div className="mt-5">
         <label className='update-label' for="email">Client Name</label>
         <input type="text" className="form-control form-control-lg mt-2" id="myInput"  placeholder="Enter business name" name="email"/>
       </div>
       <div className="update-div">
       <label className='update-label' for="email">Contact Name</label>
       <input type="text" className="form-control form-control-lg mt-2" id="myInput" placeholder="Enter contact name" name="email"/>
     </div>
     <p className='update-paragraph'>Note: You must complete all the mandatory fields</p>
      <Link to="/login">
    <div className='d-grid'>
    <Button
    buttonStyle="btn login-button update-button-1"
    labelstyle="labelstyle update-button"
    label="Update"
    >
   </Button>
   </div>
   </Link>
         </form>
       </div>
     </div>
   </div>
     </div>
    </>
  )
}

export default UpdateProfile;