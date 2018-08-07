import React from 'react';
import CommentsList from "../CommentsList/";
import dataBase from '../../dataBaseComments.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Search from "../Search";

function App() {
        return (
            <div className="container-comment">
                <div className='comment-caption'>
                    <div className='caption-item'>
                        <h5 className='caption-item__title'>
                            Коментарии
                        </h5>
                    </div>
                    <div className='caption-item'>
                        <div className='caption-item-search'>
                           <Search/>
                        </div>
                    </div>
                </div>
                <CommentsList comments={dataBase}/>
            </div>
        );
}
export default App