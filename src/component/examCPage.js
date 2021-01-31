import react from 'react';
import './examCPage.css'



class ExamCPage extends react.Component {






    render() {
        return (
            <div className="formBack">
            <div className="formSayfa">
            <form>
            
            <h3>Sınavınız tamamlandı</h3>

           

          



            <button  type="submit" className="btn btn-danger btn-lg btn-block">Tamam</button>

        </form> 
        </div>
        </div>        
           )
    }


}

export default ExamCPage;