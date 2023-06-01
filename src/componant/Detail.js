import React from 'react'
import Header from './header';
import Button from './Button';
import { ARROW, EDITIMG, PENCIL } from '../img/image';

const Detail = () => {
  return (
    <>
    <Header/>
    <section className='loginbg'>
    <div className='container'>
    <div className='manage-edit'>
    <span className='manage-edit-paragraph'>Manage Client</span>
    <img className='arrow' src={ARROW}/>
    <span className='manage-edit-paragraph1'>Details</span>
    </div>
    <div className='edit-button'>
    <Button
    buttonStyle="btn manage-client-button"
    labelstyle="labelstyle ps-2"
    imgSrc={PENCIL}
    label="Edit"
    >
    </Button>
    </div>
    <div className='edit-page'>
    <div className='edit-form'>
    <div className='row full-edit-heading'>
    <div className='col-2'>
    <img className='edit-emg' src={EDITIMG}/>
    </div>
    <div className='col-4'>
    <div className='row'>
    <div className='col-6 edit-paragraph'>
    <p>Client Name:</p>
    <p>Contact Name:</p>
    <p>Contact Email Id:</p>
    <p>Registered On:</p>
    <p>Status:</p>
    </div>
    <div className='edit-paragraph1 col-6'>
    <p>Leslie Alexander</p>
    <p>Ronald</p>
    <p>leslie.alexander@example.com</p>
    <p>05 July 2022</p>
    <p className='edit-heading-1 pb-4'>Active</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Detail;