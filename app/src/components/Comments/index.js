import React, {Component} from 'react';
import './style.css'

class Comments extends Component{
        state = {
            isOpen : false
        };
    render(){
        const {comments} = this.props;
        const body = this.state.isOpen && <section className='comment-body'>
            <div className='comment-body__text'>
                {comments.text}
            </div>
        </section>;
        return (
            <div className='comment'>
                <div className='comment-header'>
                    <div className='comment-header-item'>
                        <div className='comment-header-item__title'>
                            {comments.title}:
                        </div>
                        <div className='comment-header-item__user'>{comments.user}</div>
                        <div className='comment-header-item__date'>
                            date: {(new Date(comments.date).toDateString())}
                        </div>
                    </div>
                    <div className='comment-header-item'>
                        <button onClick={this.handleClick} className='btn btn-light btn-sm'>
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </div>
                </div>
                    {body}
            </div>
        )
    }
    handleClick = () =>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}
export default Comments;