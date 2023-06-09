import React from 'react'
import Button from './Button';
import { AiOutlineSearch} from "react-icons/ai";
import Table from './Table';
import { NAVBAR_IMG } from '../img/image';

const ManageClient = () => {
  return (
    <>
    <section className="manageclient">
    <div className='container'>
    <h1>Manage Client</h1>
    <div className="d-flex justify-content-between mt-4">
    <div>
    <input className="input-search form-control rounded-pill me-2" 
    type="search" 
    placeholder="Search"
    aria-label="Search"/>
    <AiOutlineSearch className="icon" />
    </div>
    <div>
    <Button
    buttonStyle="btn manage-client-button"
    labelstyle="labelstyle"
    label="Add Client"
    data-bs-toggle="modal" data-bs-target="#myModal"
    >
    </Button>
  <div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className="col-11 text-center add-client">Add Client</h4>
        <button type="button" className="btn-close me-2" data-bs-dismiss="modal"></button>
      </div>
       <div>
       <img src={NAVBAR_IMG} className='rounded-pill add-client-img'/>
       </div>
  
      <div className="modal-body text-center">
      <Button
      buttonStyle="btn add-logo-button rounded-pill"
      labelstyle="add-logo"
      label="Add Logo"
      >
      </Button>
      </div>
      <div className='container form-add-client'>
      <form>
      <div className="mt-2">
        <label className="form-label form-client">Client Organisation Name</label>
        <input 
        type="text" 
        className="form-control form-control-lg"  
        aria-describedby="emailHelp" 
        placeholder="Enter client organisation name"
        />
      </div>
      <div className="mt-3">
        <label className="form-label form-client">Contact Person Name</label>
        <input
         type="text" 
         className="form-control form-control-lg" 
         placeholder="Enter contact person name"
         />
      </div>
      <div className="mt-3">
        <label  className="form-label form-client">Client Email</label>
        <input 
        type="password" 
        className="form-control form-control-lg" 
        placeholder="Enter client email"
        />
      </div>
      <div className='container pt-4 pb-5'>
      <div className="d-flex justify-content-around">
      <Button
      buttonStyle="btn add-client-button1"
      labelstyle="add-logo-button2"
      label="Canel"
      >
      </Button>
      <Button
      buttonStyle="btn add-logo-button"
      labelstyle="add-logo-button1"
      label="Add"
      >
      </Button>
      </div>
      </div>
    </form>
    </div>
    </div>
  </div>
</div>
    </div>
   </div>
   <Table/>
    </div>
    </section>
    </>
  )
}

export default ManageClient;