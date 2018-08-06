import React from 'react';
import Comments from '../Comments/index'
import './style.css'

export default function CommentsList({comments}){
    const commentsElements = comments.map(comment =>
        <li key={comment.id} className='comment-list__li'><Comments comments={comment}/></li>
    )
    return(
        <ul className='comment-list'>
            {commentsElements}
        </ul>
    )
}