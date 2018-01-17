import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from 'js/react_app/components/modal'

import 'css/react_app/login/login.scss';



class Login extends React.Component{
    constructor(){
        super();
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <Modal> 
                    <div className="modal-component">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary" onClick={this.handleFacebookClick}>Login with Facebook</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
    handleFacebookClick(){
        window.location="/auth/facebook";
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