import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/people/">
          <Main />
        </Route>
        <Route exact path="/people/:id">
          <Detail />
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;



