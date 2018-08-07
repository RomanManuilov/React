import React,{Component} from 'react';
import Comments from '../Comments'
import dataBase from '../../dataBaseComments'

class Search extends Component{
    render(){
        return(
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control my-sm-0" type="search" placeholder="Search" aria-label="Search" onChange={this.handelSearch}></input>
            </form>
        )
    }
    getInitialState = () =>{
        return{
            displayedComments : dataBase
        }
    }
    handelSearch = (event) => {
        var searchQuery = event.target.value.toLowerCase()
        var displayedComments = dataBase.filter(function (el) {
            var searchVal = el.user.toLowerCase();
            return searchVal.indexOf(searchQuery) !== -1;
        });
        console.log(displayedComments);
        this.setState({
            displayedComments: displayedComments
        })
    }

}
export default Search