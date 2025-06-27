import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import To_do_list_box from './To_do_list_box';
import Taskbox from './Taskbox';

export default function Background(todolist) {
  return (
    <section className='container-fluid background'>
        <div className='container big_box'>
            <div className='row box'>
                <To_do_list_box todolist = {todolist}/>
            </div>
        </div>
    </section>
  )
}
