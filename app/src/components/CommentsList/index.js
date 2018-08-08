import React, {Component} from 'react';
import Comments from '../Comments/index'
import './style.css'
import dataBase from '../../dataBaseComments'

class CommentsList extends Component{
    constructor(props){
     super(props);
     this.state = {
         displayedComments : dataBase
     }
    };
    handelSearch = (event) => {
        var searchQuery = event.target.value;
        var displayedComments = dataBase.filter(function (el) {
            var userVal = el.user.toLowerCase();
            var dateVal = el.date.toLowerCase();
            console.log(typeof searchQuery);
            return typeof(searchQuery) !== "number"  ? userVal.indexOf(searchQuery) !== -1 :  dateVal.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedComments: displayedComments
        })
    }
    render() {
        return (
            <div>
                <div className='comment-caption'>
                    <div className='caption-item'>
                        <h5 className='caption-item__title'>
                            Коментарии
                        </h5>
                    </div>
                    <div className='caption-item'>
                        <div className='caption-item-search'>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control my-sm-0" type="search" placeholder="Search" aria-label="Search" onChange={this.handelSearch}>
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
                <ul className='comment-list'>
                    {
                        this.state.displayedComments.map((comment, index) =>
                            comment.title === 'Отдел продаж' ?
                                <li key={comment.id} className='comment-list__li'>
                                    <Comments comments={comment} group='sale' defaultOpen={index === 0} /></li> :
                                <li key={comment.id} className='comment-list__li'>
                                    <Comments comments={comment} group='account' defaultOpen={index === 0}/></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default CommentsList