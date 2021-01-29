import React from 'react';
import SearchBar from './searchBar';
import ExamList from './examList';
import LoginPage from './LoginPage';
import ExamPage from './ExamPage';
import {
  BrowserRouter as Router,Route} from "react-router-dom";


import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

class App extends React.Component {

  state = {
    exams: [
      {
        "id": 1,
        "lesson": "algorithms",
        "teacher": "John Doe",
        "type": "Quiz",
        "lastTime": "22/02/2021",
        "time": 60
      },
      {
        "id": 2,
        "lesson": "Data",
        "type": "Quiz",
        "teacher": "Martin Bridge",
        "lastTime": "20/02/2021",
        "time": 30
      },
      {
        "id": 3,
        "lesson": "AI",
        "type": "Midterm",
        "teacher": "Ahmet uslu",
        "lastTime": "18/02/2021",
        "time": 60
      },
      {
        "id": 4,
        "lesson": "Math",
        "type": "Midterm",
        "teacher": "Aslı Arı",
        "lastTime": "19/02/2021",
        "time": 46
      },
      {
        "id": 5,
        "lesson": "Biology",
        "type": "Midterm",
        "teacher": "Serhat Dişli",
        "lastTime": "19/02/2021",
        "time": 60
      }
    ],

    search: "",

    loginP: false

  }
  searchExam = (event) => {
    console.log(event.target.value);

    this.setState({ search: event.target.value })


  }

  loginOC = () => {

    this.setState({ loginP: !this.state.loginP })

  }


  render() {

    let filteredExams = this.state.exams.filter(
      (exam) => {
        return exam.lesson.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )



    return (
      <Router>

        <div className="App">
          <Route path="/" exact>
          {/* -----------------------------HEADER------------------------------------------ */}
          <div className="header">
            <div className="header-top">

            </div>
            <div className="container">
              <div className="row">
                <span className="navbar-brand mb-0 h1 logo">Online Education Assesment
            </span>
                <div className="nav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <button type="button" className="btn btn-light ">Products</button>
                    </li>
                    <li class="nav-item">
                      <button type="button" className="btn btn-light ">Help</button>
                    </li>
                    <li class="nav-item">
                      <button type="button" className="btn btn-light buton3">ContactUs</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="container">
              <div className="row">
                <span className="navbar-brand mb-0 h1 sText">kwi</span>
                <SearchBar
                  searchExamProp={this.searchExam}
                />

                <div className="buttons">
                  <button type="button" className="btn btn-danger buton1">Sign Up</button>
                  <button onClick={this.loginOC} type="button" className="btn btn-light buton2">Login</button>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
          {/* -----------------------------HEADER------------------------------------------ */}
          {/* ------------------------------Content------------------------------------*/}

          <div className="container">
            <p>Last Exams</p>

            <ExamList
              exams={filteredExams}

            />


          </div>
          {/* ------------------------------Content------------------------------------*/}
          {/* ------------------------------LoginPage------------------------------------*/}
          {
            (this.state.loginP) ?
              <LoginPage
                loginOC={this.loginOC}
              /> : null
          }
        </Route>
          {/* ------------------------------LoginPage---------------------------------*/}
          
          <Route path="/exam">
          
             <ExamPage />

          </Route>

        </div>
      
      </Router>
    );
  }
}

export default App;
