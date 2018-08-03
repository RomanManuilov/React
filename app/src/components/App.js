import React, { Component } from 'react';
import Comments from "./Comments.js";
import CommentDataBase from '../dataBaseComments'

class App extends Component {
    render() {
        return (
            <div>
                <h3>Коментарии</h3>
                <Comments comments={CommentDataBase[0]}/>
            </div>
        );
    }
}
export default App