import logo from './logo.svg';
import './App.css';

import SomeClassComponent from "./components/SomeClassComponent";

function App(){
  const person1 = {
    name: "Doe, John",
    age: 45,
    hairColor: "Black"
  }
  const person2 = {
    name: "Smith, John",
    age: 88,
    hairColor: "Brown"
  }
  


  return (
    <div>
      <SomeClassComponent person1 ={person1} person2 ={person2}/>
    </div>
  );


}


export default App;
