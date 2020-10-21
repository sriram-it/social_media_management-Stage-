import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/signUp" component={SignUp}/>
      </Switch>
      {/* <Login/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
