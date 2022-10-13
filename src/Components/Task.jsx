import React from 'react'

const Task = ({title , descripton , deleteTask , index}) => {
  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{descripton}</span>
        </div>
      
       <button onClick={() => deleteTask(index)} >-</button>



    </div>
  )
}

export default Task
