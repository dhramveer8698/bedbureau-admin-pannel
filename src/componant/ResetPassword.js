import React from 'react'
import Header from './header';
import { Link } from 'react-router-dom';
import Button from './Button';
import { RxCrossCircled} from "react-icons/rx";


const ResetPassword = () => {
  return (
    <>
    <Header/>
    <section className='loginbg'>
    <div className='container'>
    <h1>Reset Password</h1>
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <form className='update-form' >
        <div className="mt-5">
        <label className='update-label'>Current Password*</label>
        <input 
        type="password" 
        className="form-control form-control-lg mt-2" 
        placeholder="Enter current password" 
        name="email"/>
      </div>
      <div className="update-div">
      <label className='update-label'>New Password*</label>
      <input 
      type="password" 
      className="form-control form-control-lg mt-2" 
      placeholder="Enter new password" 
      name="email"/>
    </div>
    <div className='pt-2'>
    <h4>Your password must have:</h4>
    <h5><RxCrossCircled className='me-2'/> least one lowercase letter</h5>
    <h5><RxCrossCircled className='me-2'/> At least one UPPERCASE letter</h5>
    <h5><RxCrossCircled className='me-2'/> At least one number</h5>
    <h5><RxCrossCircled className='me-2'/> At least one special character</h5>
    <h5><RxCrossCircled className='me-2'/> At least 8 characters</h5>
    </div>
    <div className="update-div">
    <label 
    className='update-label' 
    >Confirm Password**</label>
    <input 
    type="password" 
    className="form-control form-control-lg mt-2"  
    placeholder="Confirm new password" 
    name="email"/>
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

export default ResetPassword;