import React, {useState} from 'react';
import {Router} from '@reach/router';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CreateMovie from './components/CreateMovie';
import UserProfile from './components/UserProfile';
import MovieDetails from './components/MovieDetails';
function App() {

  const [reloadBoolean, setReloadBoolean] = useState(false);
  return (
    <div>
    
      <Router>
        <Register path="/" />
        <Login setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean} path="/login" />
        <Dashboard  path="/movie"/>
        <CreateMovie path="/movie/new"/>
        <UserProfile path="/user/profile/:id"/>
        <MovieDetails path="/movie/:id" />
      </Router>
    </div>
  );
}

export default App;
