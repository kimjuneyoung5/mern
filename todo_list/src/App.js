import logo from './logo.svg';
import './App.css';


import { useState } from 'react';


function App() {

  const [newTodoList, setNewTodoList] = useState("");
  const [todoList, setTodoList] = useState([]);

  const makeNewTodoList = (e) => {
    e.preventDefault();

    const todo = {
      text: newTodoList,
      underline: false
    }
    setTodoList([...todoList, todo]);
    setNewTodoList("");
  };

  const deleteTodoList = (index) => {
    const oneTodoList = todoList.filter((list, i) => {
      return i !== index;
    });

    setTodoList(oneTodoList);
  }

  const underlineTodoList = (index) => {
    const underlineTodos = todoList.map((list, i) => {
      if(index === i) {
        list.underline = !list.underline; 
      }

      return list;
    });
    setTodoList(underlineTodos);
   }


  return (
    <div>
      <form onSubmit = {(e) => {
        makeNewTodoList(e);
      }}>
        <input type="text" onChange = {(e) => {
          setNewTodoList(e.target.value);
        }}/>
        <div>
          <button style={{backgroundColor: "blue", color:"white"}}>Add</button>
        </div>
      </form>

      <p></p>
      {todoList.map((list, i) => {
        return (
          <div key = {i}>
            {(list.underline === true)? <span style={{textDecoration: "line-through"}}>{list.text}</span> : <span>{list.text}</span>}
              <input type="checkbox" onChange = {(e) => {
                underlineTodoList(i);
              }}
              checked={todoList.underline} />
            <button style={{backgroundColor: "black", color:"white"}} onClick = {(e) => {
              deleteTodoList(i);
            }}> Delete </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
