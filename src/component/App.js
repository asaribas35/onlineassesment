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
    exams: [],

    questions: [] ,

    search: "",

    loginP: false

  }

  async componentDidMount(){
    const baseURL = "http://localhost:3002/exams";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({exams : data})

    const qURL = "http://localhost:3003/questions";
    const istek = await fetch(qURL);
    const veri = await istek.json();
    this.setState({questions:veri})

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
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <button type="button" className="btn btn-light ">Products</button>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn btn-light ">Help</button>
                    </li>
                    <li className="nav-item">
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
          
             <ExamPage 
             question ={this.state.questions}
             />

          </Route>

        </div>
      
      </Router>
    );
  }
}

export default App;
