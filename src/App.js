import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './default.scss';

//pages
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'

//layouts
import MainLayout from './layouts/MainLayout'

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={
          () => <Homepage />
        } />
        <Route path="/login" render={() =>
            <Login />
        } />
        <Route path="/signup" render={() =>
          <MainLayout>
            <Register />
          </MainLayout>} />
      </Switch>
    </div>
  );
}

export default App;
