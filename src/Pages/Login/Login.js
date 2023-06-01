
import React from 'react';
import { LOGIN_IMG, LOGO } from '../../img/image';
import Button from '../../componant/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <section className='loginbg'>
   <div className='container'>
   <div className='row pt-3'>
   <div className='col-sm-6'>
   <img src={LOGO}/>
   <div className='text-center login-merg-para'>
   <h1  className='login-para'>Welcome to</h1>
   <h1  className='login-para1'>Bed Bureau Super Admin</h1>
   <img src={LOGIN_IMG} className='pt-5'/>
   </div>
   </div>
   <div className='col-lg-5 formsection ms-5'>
   <section className='form px-5'>
   <h1 className='formheading pt-3'>Login</h1>
   <form>
   <div className="mb-4 mt-5">
     <label for="email">Email ID</label>
     <input type="email" className="form-control mt-2" id="email" placeholder="Enter email id" name="email"/>
   </div>
   <div className="mb-5">
     <label for="pwd">Password</label>
     <input type="password" className="form-control mt-2" id="pwd" placeholder="Enter Password" name="pswd"/>
     <div className='forgot-passwrd pt-2'>
     <a 
     className='forgot-password'
     href="/resetpassword">
     Forgot Password?</a>
     </div>
   </div>
   <Link to="/dashboard">
   <div className='d-grid'>
   <Button
   buttonStyle="btn login-button"
   labelstyle="labelstyle login-update"
   label="Login"
   >
   </Button>
   </div>
   </Link>
 </form>
   </section>
   </div>
   </div>
   </div>
   </section>
    </>
  )
}

export default Login;