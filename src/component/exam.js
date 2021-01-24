import React from 'react';
import './exam.css'

class Exam extends React.Component {

    render() {
        return (
            <div className="card w-85 d-flex">
                <div className="card-body ">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="button ">
                    <button className="btn btn-danger">Start Test</button>
                </div>
            </div>

        )
    }


}

export default Exam;