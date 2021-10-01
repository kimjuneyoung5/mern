import './App.css';
import {BrowserRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import Main from './views/Main';
import Edit from './views/Edit';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <hr />
      <Switch>
        <Route exact path="/authors">
          <Main />
        </Route>
        <Route exact path="/authors/new">
          <Create />
        </Route>
        <Route exact path="/authors/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
