import React, {Component} from 'react';


class ButtonFontStyle extends Component {
    constructor(){
        super();
        this.state = {
            buttonClick : false
        }
    }
    handleClick=()=>{
        this.setState({
            buttonClick: !this.state.buttonClick
        })
    };
    render() {
        return (
            <div>
                <button
                    className={this.state.buttonClick ? 'addComments-item__btn-on' : 'addComments-item__btn-off'}
                    onClick={this.handleClick}>
                    {this.props.type}
                </button>
            </div>
        )
    }
}
export default ButtonFontStyle