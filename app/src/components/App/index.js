import React from 'react';
import CommentsList from "../CommentsList/";
import сommentDataBase from '../../dataBaseComments.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


function App() {
        return (
            <div className="container-comment">
                <div>
                    <div className='container-comment__title'>Коментарии</div>
                </div>
                <CommentsList comments={сommentDataBase}/>
            </div>
        );
}
export default App