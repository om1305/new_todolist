import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Check.css";
import Process from "./Process";

export default function Taskbox({ todolist, settodolist }) {
  let removedtodolist, i;
  function remove(indexnumber) {
    removedtodolist = todolist.filter((value, i) => i != indexnumber);
    // console.log(removedtodolist)
    settodolist(removedtodolist);
  }
  let [status, setstatus] = useState(false);

  // let [count, setcount] = useState(0);

  function checkstatus(indexnumber) {
    let updatedlist = todolist.map((task , i)=>
    i ===indexnumber?{...task,checked : !task.checked } : task
    );
    settodolist(updatedlist);
  }
  const countchecked = todolist.filter (task => task.checked).length;

  return (
    <div>
      < Process countchecked={countchecked} todolist={todolist} />
      <div className="container me-1 ms-1">
        
        <h5>Total Checked : {countchecked} </h5>
        {todolist.map((Task, indexnumber) => (
          <div
            className={status ? "row mt-3 statusline" : "row mt-3"}
            // onClick={() => checkstatus()}
            style={{ backgroundColor: "white", height: "40px" }}
          >
            <div className="col-1">
              <input
                type="checkbox"
                className="mt-3"
                onChange={() => checkstatus(indexnumber)}
              />
            </div>
            <div className="col-8">
              <h3>{Task.name}</h3>
              {/* {console.log(indexnumber)}           */}
            </div>
            <div className="col-1 me-2 mt-1">
              <img
                src="./icons8-edit-image-48.png"
                height={"30px"}
                width={"30px"}
              />
            </div>
            <div className="col-1 ms-2">
              <button
                className="me-4"
                name="btn"
                onClick={() => remove(indexnumber)}
                style={{ height: "40px",border:'none'}}
              >
                <h3>x</h3>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
