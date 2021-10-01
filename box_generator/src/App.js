import logo from './logo.svg';
import './App.css';
import React, { useState } from  'react';
import BoxComponent from './components/BoxComponent';
import DrawBox from './components/DrawBox';



function App() {
  const [newColor, setColor] = useState([{color:"red",width:"100px",height:"100px"}]);
  const createNewBox = (newBox) => {
    console.log("hello");
    var box = newColor.concat(newBox);
    setColor(box);
  }

  return (
    <div>
      <BoxComponent newBox = {createNewBox}/>
      <DrawBox newColor = {newColor}/>
    </div>
  );
}

export default App;
