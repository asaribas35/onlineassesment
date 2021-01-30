import react from 'react';
import './ExamPage.css'


class ExamPage extends react.Component{

render(){
    return(
        <div className="container">

            <div className="row">
                <div className="card cardQuestion">
                    <p className="question"><span>1.</span> Which of the following is a best practice for designing a secure RESTful web service?</p>

                    <div className="answer">
                        <div className="choices">
                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            Validate Malformed XML/JSON - Check for well formed input passed to a web service method.
                            </label>
                        </div>
                        <div className="choices">
                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            Throw generic Error Messages - A web service method should use HTTP error messages like 403 to show access forbidden etc
                            </label>
                        </div>
                        <div className="choices">
                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            Both of the above.
                            </label>
                        </div>
                        <div className="choices">
                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            None of the above.
                            </label>
                        </div>
                        <div className="choices">
                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            These web services use HTTP methods to implement the concept of REST architecture
                            </label>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}


}

export default ExamPage;