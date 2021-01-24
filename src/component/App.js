import React from 'react';
import SearchBar from './searchBar';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="row">
            <span class="navbar-brand mb-0 h1">KWİ</span>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <div className="row">
              <SearchBar />
            <div className="buttons">
            <button type="button" class="btn btn-danger buton1">Sign Up</button>
              <button type="button" class="btn btn-light buton2">Login</button>
            </div>
            </div>
          </div>
        </div>
        
      </div>
  );
}

export default App;
