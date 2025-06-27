import React from 'react'
import { Button } from 'react-bootstrap'
import Form from './Form'

export default function Add_to_do(todolist) {
  return (
    <div>
        <div className='col-12 mt-3' style={{display:'flex', justifyContent:'start'}}>
        <h3><b> To Do</b></h3>
        </div>
        <div className='row'>
        <div className='col-12'>
        {/* <Button variant="secondary" size="sm">Add</Button> */}
        <Form todolist = {todolist}/>
        </div>
        {/* <div className='col-2 ms-2'>
        </div> */}
        </div>
    </div>
  )
}
