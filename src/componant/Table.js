import React from 'react'
import { NAVBAR_IMG, TABLE_IMG1, TABLE_IMG2, TABLE_IMG3 } from '../img/image';

const Table = () => {
  
  return (
    <>
    <div className="table-background table-responsive">
    <h2 className='client-list ps-4 pt-4 pb-3'>List of All Clients</h2>
    <table className="table">
      <thead className='table-head'>
        <tr>
          <th>S.No.</th>
          <th>Client Name</th>
          <th>Contact Name</th>
          <th>Contact Email</th>
          <th>No. of Wards</th>
          <th>Registered On</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
          <img src={TABLE_IMG1} className="rounded-pill table-img me-4"/>Client name 1
          </td>
          <td>Leslie Alexander</td>
          <td>lesie.alexander@example.com</td>
          <td>2</td>
          <td>05 July 2022</td>
          <td>Active</td>
          <td><img src={TABLE_IMG3}/></td>
        </tr>
    <tr>
    <td>1</td>
    <td><img src={TABLE_IMG2} className="rounded-pill table-img me-4"/>Client name 4</td>
    <td>Robert Fox</td>
    <td>Robert Fox@example.com</td>
    <td>2</td>
    <td>14 June 2022</td>
    <td>Pending</td>
    <td><img src={TABLE_IMG3}/></td>
    </tr>
      </tbody>
    </table>
    <div class="center">
    <div class="pagination">
        <a href="#">&lt;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&gt;</a>
    </div>
  </div>
  </div>
    </>
  )
}

export default Table;