import React from "react";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { connect } from "react-redux";

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className="item-count">0</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);