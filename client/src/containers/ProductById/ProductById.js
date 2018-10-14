import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FetchProduct} from '../../redux/modules/productById';

const mapStateToProps = store => {
    console.log(store);
    return {
        productId: store.productById
    }
};


class ProductById extends Component {
    componentDidMount() {
        const {FetchProduct} = this.props;
        const  id = this.props.match.params.id;
        FetchProduct(id);
    }
    render() {
        if(!this.props.productId.data)
            return null;
        else
        return (
            <div className='products-wrapper'>
                <p>{this.props.productId.data && this.props.productId.data.name}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps, {FetchProduct})(ProductById);