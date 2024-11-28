import React from 'react';
import editIcon from '../Icons/edit.svg';
import trashIcon from '../Icons/trash.svg'
const Todo = () => {
  return (
    <div className='bg-dark mb-2 d-flex justify-content-between align-items-center text-white col-12 px-3'>
        <div className="col-9 bg-info rounded-pill py-2 px-3 fw-bold text-white">
            Task will be displayed here
        </div>
        <div className="col-2 bg-transparent d-flex justify-content-evenly align-items-center">
            <img src={editIcon} className='bg-transparent' role='button' alt="" />
            <img src={trashIcon} className='bg-transparent' role='button' alt="" />
        </div>
    </div>
  )
}

export default Todo