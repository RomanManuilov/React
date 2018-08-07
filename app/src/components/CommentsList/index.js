import React from 'react';
import Comments from '../Comments/index'
import './style.css'

export default function CommentsList({comments}){
    const commentsElements = comments.map((comment, index) =>
        comment.title === 'Отдел продаж' ? <li key={comment.id} className='comment-list__li'>
                <Comments comments={comment} group='sale' defaultOpen={index === 0} /></li> :
                 <li key={comment.id} className='comment-list__li'>
                <Comments comments={comment} group='account' defaultOpen={index === 0}/></li>
    )
    return(
        <ul className='comment-list'>
            {commentsElements}
        </ul>
    )
}