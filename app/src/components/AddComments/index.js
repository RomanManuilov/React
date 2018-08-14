import React, {Component} from 'react';
import './style.css'

class AddComments extends Component{
    constructor(){
        super()
        this.state = {
            currentElem : true
        }
    }
    render(){
        const showResult = <div className='addComments__show' id='show'></div>
        return(
            <div className='container-addComments'>
                <div className='addComments__title'>Добавить коментрии</div>
                <div className='addComments'>
                    <div className='addComments-block'>
                        <textarea className='addComments__text' name="addComments" id="text" cols="50" rows="5"></textarea>
                    </div>
                    <div className='addComments-block'>
                        <div className='addComments-item'>
                            <button className='addComments-item__btn' onClick={this.handleClick}>B</button>
                            <button className='addComments-item__btn' onClick={this.handleClick}>I</button>
                            <button className='addComments-item__btn'>U</button>
                        </div>
                        <div className='addComments-item'>
                            <div className='addComments-item__color' type='red' style={{background: "red"}}></div>
                            <div className='addComments-item__color' type='green' style={{background: "green"}}></div>
                            <div className='addComments-item__color' type='grey' style={{background: "grey"}}></div>
                        </div>
                        <div className='addComments-item'>
                            <button className='addComments-item__send'>Отправить</button>
                        </div>
                    </div>
                </div>
                {showResult}
            </div>
        )
    }
    handleClick =()=>{
        let text = document.getElementById('text').value;
        document.getElementById('show').innerText =  text;
        let div = document.getElementById('show');
        console.log(type);
        function typeButton (type) {
            if(type === "bold")
            {
                return  div.classList.add('addComments-italic')
            }
            else if(type === 'italic')
            {
                return  div.classList.add('addComments-italic')
            }
        }
        this.setState({
            currentElem : typeButton(this.state.props)
        })

    }
}
export default AddComments