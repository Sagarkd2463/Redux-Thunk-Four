import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from './redux/actions/userAction';
import User from './component/User';
import './App.css';

function App() {

  const userList = useSelector(state => state.usersList);
  const { loading, users, error } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>Redux Thunk </h1>
      {
        loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2>
        : <User users={users}/>
      }
    </div>
  )
}

export default App;
