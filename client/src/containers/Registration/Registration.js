import React, {Component} from 'react';
import './registration.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {postRegistration} from '../../redux/modules/registration';

const mapStateToProps = store => {
    return {
        token: store.registration.token,
    }
};


class Registration extends Component {

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
        this.props.postRegistration({...this.state})
    };

    render() {
        return (
            <div className="login-wrapper">
                <div className='input-wrapper'>
                    <form>
                        <h1>Registration</h1>
                        <div>
                            <label>Your name:</label>
                            <input type="text" onChange={this.handleChangeUsername}/>
                        </div>
                        <div>
                            <label>Your password:</label>
                            <input type="password" onChange={this.handleChangePassword}/>
                        </div>
                        <button type='submit' onClick={this.handleClick}>Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {postRegistration})(Registration);