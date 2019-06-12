import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

function App() {
  return (
    <Route>
      <div className='App'>
        <header className='App-header'>
          <FriendsList />
        </header>
      </div>
    </Route>
  );
}

export default App;
