import react from 'react';
import './ExamPage.css'


class ExamPage extends react.Component{

render(){
    return(
        <div className="container">

            <div className="row">

                {
                    

                    this.props.question.map((soru) => (
                        <div className="card cardQuestion">
                        <p className="question"><span>{soru.questionId}.</span> {soru.question}</p>
    
                         <fieldset>  
                          <div className="answer">
                            
                            {
                                soru.answer.map((cho) => (
                                    
                                    <div className="choices form-check">
                                    <input className="form-check-input" type="radio" name ={soru.questionId} id="flexRadioDefault1"/>
                                   <label className="form-check-label" for="flexRadioDefault">
                                        {cho}
                                   </label>
                               </div>
                               

                                ))
                            }
                            


 
                        </div>
                        </fieldset> 
                    </div>
                    )

                    ) 


                }



            </div>
        </div>


    )
}


}

export default ExamPage;