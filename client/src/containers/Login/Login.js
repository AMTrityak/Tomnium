import React, { Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {postLogin} from '../../redux/modules/login'


const mapStateToProps = store => {
    return {
        // token: store.login.data,
    }
};

class Login extends Component {

    state = {
        username: '',
        password: '',
    };

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };
    handleClick = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.props.postLogin({username, password })
    };


    render() {
        console.log(this.props);
        return (
            <div className="login-wrapper">
                <div className='input-wrapper'>
                    <form>
                        <div>
                            <h1>Login</h1>
                            <label >Your name:</label>
                            <input type="text" onChange={this.handleChangeUsername}/>
                        </div>
                        <div>
                            <label>Your password:</label>
                            <input type="password" onChange={this.handleChangePassword}/>
                        </div>
                        <button type='submit' onClick={this.handleClick}>Sign In</button>
                    </form>
                    <Link to={'product/new'}>create product</Link>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {postLogin}) (Login);