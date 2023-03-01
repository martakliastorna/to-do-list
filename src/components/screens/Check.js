import React from 'react'
import { BsCheck } from 'react-icons/bs'

function Check({isCompleted}) {
  return (
    <div className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400' : ''} 
    h-6 w-6 mr-3 flex items-center justify-center`}>
    {isCompleted && <BsCheck size={24} className='text-gray-900 ' />} </div>
  )
};

export default Check;