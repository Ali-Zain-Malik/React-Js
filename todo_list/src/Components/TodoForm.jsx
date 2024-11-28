import React from 'react'
import Todo from './Todo'

const TodoForm = () => {
  return (
    <div className='container bg-dark col-lg-6 col-md-8 col-sm-10 d-flex flex-column align-items-center p-0'>
        <form className='bg-dark col-12 py-3 px-3'>
            <div className="container-fluid px-0 d-flex justify-content-between bg-transparent">
                <input type="text" placeholder='Enter your task here' className='col-9 border border-0 rounded-pill outline outline-none py-2 px-3 bg-info-subtle' />
                <button className='col-2 btn btn-info rounded-pill text-light fw-bold fs-6'>Add</button>
            </div>
        </form>
        <div className="mt-3 bg-transparent col-12 ps-4 mb-1">
            <h5 className='text-start bg-transparent text-white'>Your tasks listed below</h5>
        </div>
        <Todo />
        <div className="mb-2"></div>
    </div>
  )
}

export default TodoForm 