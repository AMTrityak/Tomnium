import React, {Component} from 'react';
import { connect } from 'react-redux';
import {postCreateProduct} from "../../redux/modules/createProduct";
import { Redirect } from 'react-router-dom'

class CreateProduct extends Component {
    state = {
        name: '',
        price: '',
        description: '',
        createBy: '',


    };
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    };

    handleChangeDescr = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleChangeCreateBy = (e) => {
        this.setState({
            createBy: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.postCreateProduct({ ...this.state })
    };
    render() {
        return (
            <div>
                {localStorage.getItem('authHeader') ?
                <form>
                    <h1>Create product</h1>
                    <div>
                        <label>Name:</label>
                        <input type="text" onChange={this.handleChangeName}/>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="text" onChange={this.handleChangePrice}/>
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="text" onChange={this.handleChangeDescr}/>
                    </div>
                    <div>
                        <label>CreatedBy:</label>
                        <input type="text" onChange={this.handleChangeCreateBy}/>
                    </div>
                    <button onClick={this.handleClick}>Create</button>
                </form>
                :<Redirect
                        to={{
                            pathname: '/login',
                            state: { from: this.props.location },
                        }}
                    />}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        isAuth: store.registration.isAuth,
    }
};


export default connect(mapStateToProps, {postCreateProduct})(CreateProduct)