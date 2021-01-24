import React from 'react';
import './examList.css'

class ExamList extends React.Component {

    render() {
        return (
            <div>

            {
                this.props.exams.map((exam) => ( // map fonksiyonu ile state den gelen diziyi teker teker bastır

                    <div className="card w-85 examCard" ket={exam.id}>
                    <div className="card-body ">
                        <h5 className="card-title">{exam.lesson} / {exam.teacher}</h5>
                        <p className="card-text">{exam.type} &nbsp;&nbsp;&nbsp; {exam.time} minutes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Day : {exam.lastTime} </p>
                    </div>
                    <div className="button ">
                        <button className="btn btn-danger">Start Test</button>
                    </div>
                </div>

                ))
            }




            </div>
        )
    }


}

export default ExamList;