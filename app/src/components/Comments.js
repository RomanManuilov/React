import React from 'react';


function Comments(props) {
    const {comment} = props;
    const body = <section>{comment.text}</section>;
    return (
        <div>
            <h2>{comment.title}</h2>
            {body}
            <h3>creation date: {(new Date(comment.date).toDateString())}</h3>
        </div>
    )
}
export default Comments;