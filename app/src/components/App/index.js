import React from 'react';
import CommentsList from "../CommentsList/";
import dataBase from '../../dataBaseComments.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

function App() {
        return (
            <div className="container-comment">
                <CommentsList comments={dataBase}/>
            </div>
        );
}
export default App