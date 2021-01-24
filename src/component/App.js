import React from 'react';
import SearchBar from './searchBar';
import Exam from './exam';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
      {/* -----------------------------HEADER------------------------------------------ */}
      <div className="header">
        <div className="header-top">

        </div>
        <div className="container">
          <div className="row">
            <span className="navbar-brand mb-0 h1 logo">Online Education Assesment</span>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <div className="row">
          <span className="navbar-brand mb-0 h1 sText">kwi</span>
              <SearchBar />
            <div className="buttons">
            <button type="button" className="btn btn-danger buton1">Sign Up</button>
              <button type="button" className="btn btn-light buton2">Login</button>
            </div>
            </div>
          </div>
          <hr></hr>
        </div>
        {/* -----------------------------HEADER------------------------------------------ */}
        {/* ------------------------------Content------------------------------------*/}

         <div className="container">
         <p>Last Exams</p>
         <Exam />
         <hr></hr>
         <Exam />
         <hr></hr>
         <Exam />
         <hr></hr>
         <Exam />
         <hr></hr>
         <Exam />

         </div>

        





        {/* ------------------------------Content------------------------------------*/}
      </div>
  );
}

export default App;
