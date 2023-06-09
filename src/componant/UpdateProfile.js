import React from 'react'
import Header from './header';
import { Link } from 'react-router-dom';
import Button from './Button';

const UpdateProfile = () => {
  return (
    <>
     <Header/>
     <section className='loginbg'>
     <div className='container'>
     <h1>Update Profile</h1>
     <div className="container">
     <div className="row justify-content-center">
       <div className="col-lg-6">
         <form className='update-form'>
         <div className="mt-5">
         <label className='update-label'>Client Name</label>
         <input type="text" className="form-control form-control-lg mt-2" placeholder="Enter business name" name="email"/>
       </div>
       <div className="update-div">
       <label className='update-label'>Contact Name</label>
       <input type="text" className="form-control form-control-lg mt-2" placeholder="Enter contact name" name="name"/>
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
     </section>
    </>
  )
}

export default UpdateProfile;