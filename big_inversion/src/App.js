import logo from './logo.svg';
import './App.css';

import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div>
      <FunctionalComponent firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" />
      <FunctionalComponent firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" />
      <FunctionalComponent firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown" />
      <FunctionalComponent firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" />
    </div>
  );
}

export default App;
