import React from 'react';
import './examList.css'
import {
    
    Link
  } from "react-router-dom";

class ExamList extends React.Component {
    sendID = (i,e) => {
        
        this.props.clExam(i);
    }

    

    render() {
        return (
            <div>

            {
                this.props.exams.map((exam) => ( // map fonksiyonu ile state den gelen diziyi teker teker bastır
                    
                    <div className="card w-85 examCard" key={exam.id}>
                    <div className="card-body ">
                        <h5 className="card-title">{exam.lesson} / {exam.teacher}</h5>
                        <p className="card-text">{exam.type} &nbsp;&nbsp;&nbsp; {exam.time} minutes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Day : {exam.lastTime} </p>
                    </div>
                    <div className="button ">
                        <button onClick={this.sendID.bind(this, exam.id)} className="btn btn-danger"><Link to="/exam"><span>Start Test</span></Link></button>
                    </div>
                </div>

                ))
            }




            </div>
        )
    }


}

export default ExamList;