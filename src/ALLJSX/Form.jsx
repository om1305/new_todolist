import React, { useState } from 'react'
import Taskbox from './Taskbox';

export default function Form() {
  let [todolist,settodolist] = useState([])
  // let [task , settask] = useState([todolist])
  // let task;
   function todo(event){
    event.preventDefault();
    let list = event.target.todoname.value
    // console.log(list)
    if(!todolist.some((task) => task.name === list )){
      let updatedlist = [...todolist, {name:list , checked : false  }]
      settodolist(updatedlist)
      // console.log(todolist)
      }
      else{ 
        alert("it is there")
      }
      event.target.reset()
    } 
    return (
    <div>
        <form onSubmit= {todo} className='mb-1'>
            <input 
            type='text' 
            placeholder='Add-to-do'
            name='todoname'
            style={{borderRadius:'4px' , height:'33px', width:'268px'}}
            />
        </form>
        <Taskbox todolist ={todolist} settodolist ={settodolist} />
    </div>

  )
}


