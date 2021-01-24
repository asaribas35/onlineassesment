import react from 'react';
import './searchBar.css'

class searchBar extends react.Component {

    state ={
        search : ""
    }

    render() {
        return (
            <div className="form">
                <label for="searchForm" className="form-label"><i className="bi bi-search"></i></label>
                <input onChange={(event) => this.setState({search: event.target.value })}  type="text" className="form-control form-input" id="searchForm" placeholder="Search"/>
                </div>
                
           )
    }


}

export default searchBar;