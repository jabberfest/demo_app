import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import style from 'css/react_app/login/login.scss';


class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            txt: "this is the state text change"
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <h1>Prop: {this.props.txt}</h1>
                <h2>State: {this.state.txt}</h2>
                <Widget update={this.update.bind(this)}/>
                <Button>I <Heart /> React</Button>
            </div>
        )
    }
}


Login.propTypes = {
    txt: PropTypes.string
}

Login.defaultProps = {
    txt: "default text"
}


// Function Component
const Widget = (props) => 
    <input type="text" onChange={props.update}/>

const Button = (props) => 
    <button>{props.children}</button>


class Heart extends React.Component{
    render(){
        return(
            <span>&hearts;</span>
        )
    }
}


export default Login