import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { auth, handleUser } from './firebase/utils'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/User/user.actions'
import './default.scss';
import 'antd/dist/antd.css';

//pages
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Reset from './pages/Reset'

//layouts
import MainLayout from './layouts/MainLayout'



const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUser(userAuth)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }
      dispatch(setCurrentUser(userAuth));
    })
    return () => authListener()
  }, [])

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
          <Register />
        } />
        <Route path="/reset" render={() => <Reset />} />
      </Switch>
    </div>
  );
}

export default App;
