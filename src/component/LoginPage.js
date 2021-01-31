import react from 'react';
import './LoginPage.css'

class LoginPage extends react.Component {


    render() {
        return (
            <div className="formBack">
            <div className="formSayfa1">
            <form>
            <button onClick={this.props.loginOC} className="loginX">x</button>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button onClick={this.props.loginOC} type="submit" className="btn btn-danger btn-lg btn-block">Sign in</button>

        </form> 
        </div>
        </div>        
           )
    }


}

export default LoginPage;