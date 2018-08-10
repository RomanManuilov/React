import React from 'react';
import CommentsList from "../CommentsList/";
import dataBase from '../../dataBaseComments.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import AddComments from '../AddComments'

function App() {
        return (
            <div className="container-comment">
                <AddComments/>
                <CommentsList comments={dataBase}/>
            </div>
        );
}
export default App