import React from 'react'
import Process from './Process'
import Add_to_do from './Add_to_do'
import Taskbox from './Taskbox'

export default function To_do_list_box(todolist) {
  return (
    <div >
        <h2 className='mt-3'><b>TO-DO-LIST</b></h2>
        {/* <div className='col-12 mt-4' style={{display:'flex', justifyContent:'start'}}>
            <h4><b>Process Bar</b></h4>
        </div> */}
        <div className='col-12 mt-2'>
        {/* <Process/> */}
        <Add_to_do todolist = {todolist}/>
        {/* <Taskbox/> */}
        </div>
    </div>
  )
}
