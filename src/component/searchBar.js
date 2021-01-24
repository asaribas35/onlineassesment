import react from 'react';
import './searchBar.css'

class searchBar extends react.Component {

    render() {
        return (
            <div class="form">
                <label for="searchForm" class="form-label"><i class="bi bi-search"></i></label>
                <input type="text" class="form-control form-input" id="searchForm" placeholder="Search"/>
                </div>
           )
    }


}

export default searchBar;