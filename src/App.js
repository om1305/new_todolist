import logo from './logo.svg';
import './App.css';
import './ALLCSS/Background.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Background from './ALLJSX/Background.jsx';
import To_do_list_box from './ALLJSX/To_do_list_box.jsx';
import { useState } from 'react';

function App() {
  let [todolist,settodolist] = useState([])

  return (
    <div className="App">
      <Background todolist = {todolist}/>
    </div>
  );
}

export default App;
