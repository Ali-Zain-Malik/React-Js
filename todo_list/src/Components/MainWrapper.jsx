import React from 'react'
import TodoForm from './TodoForm'

const MainWrapper = () => {
  return (
    <div className='container'>
        <h4 className='text-center mt-2 mb-4 text-capitalize text-white fw-bold fs-3'>Make your Todo List</h4>
        <TodoForm />
    </div>
  )
}

export default MainWrapper
