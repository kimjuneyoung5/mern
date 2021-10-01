import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
    
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
        <Route exact path="/people/edit/:id">
          <Update/>
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;



