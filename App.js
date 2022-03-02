import React from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import "./App.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const App = () => {
    const user = useSelector(selectUser);

  return (
    <div>
        { user ? <Logout/> : <Login/>}
    </div>
  )
};

export default App;