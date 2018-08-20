import React, {Component} from 'react';
import ButtonFontStyle from '../ButtonFontStyle'
import './style.css'

class AddComments extends Component{
    constructor(props){
        super(props);
        this.state = {
            //buttonFont: false,
            addComents: "Текст вашего коментария..."
        }
    }
    commentOnChange =(event)=>{
        this.setState({
            addComents: event.target.value
        })
    }
    handleClick =()=>{

        //if(type === 'bold'){
            //const addClassBold = <div className='addComments-bold'>{this.state.addComents}</div>
           /* this.setState({
                buttonFont: !this.state.buttonFont
                //addComents: addClassBold
            })*/
        //}

        /*console.log("Что приходит на вход",type)
        console.log("Что в state",this.state.addComents)*/
    }
    render(){
        const showResult = <div className='addComments__show' id='show'>{this.state.addComents}</div>
        return(
            <div className='container-addComments'>
                <div className='addComments__title'>Добавить коментрии</div>
                <div className='addComments'>
                    <div className='addComments-block'>
                        <textarea className='addComments__text' name="addComments" id="text" cols="50" rows="5" onChange={this.commentOnChange}></textarea>
                    </div>
                    <div className='addComments-block'>
                        <div className='addComments-item'>
                            <ButtonFontStyle type='B'/>
                            <ButtonFontStyle type='I'/>
                            <ButtonFontStyle type='U'/>
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
}
export default AddComments