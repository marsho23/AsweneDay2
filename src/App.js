import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './components/Routing/Home';
import Users from './components/Routing/Users';
import Contact from './components/Routing/Contact';
import PageNotfound from './components/Routing/PageNotFound';
function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path = "/"><Home/></Route>
            {/* <Route exact path = "/Users/:id"><Users/></Route> */}
            <Route exact path = "/Users"><Users/></Route>
            <Route exact path = "/Contact"><Contact/></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
