import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Process({countchecked ,todolist}) {
  let todolistlength = todolist.length
  return (
    <>
  {/* <div className='col-12 mt-2' style={{display:'flex', justifyContent:'start'}}>
            <h4>Process Bar</h4>
        </div> */}
  <ProgressBar className='mt-3 mb-3' now={(countchecked/todolistlength)*100} />
    </>
)}
