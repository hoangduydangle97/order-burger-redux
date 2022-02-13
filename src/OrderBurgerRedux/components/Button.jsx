import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAmountAction } from '../redux/actions/OrderBurgerAction';

class Button extends Component {
    render() {
        const { item, className, content, amount, changeAmount } = this.props;
        const style = {
            width: '35px',
            padding: '3px 10px',
            paddingBottom: '6px',
        };

        return (
            <button
                className={`btn fw-bold ${className}`}
                style={style}
                onClick={() => {
                    changeAmount(item, amount);
                }}>
                {content}
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAmount: (key, amount) => {
            dispatch(changeAmountAction(key, amount));
        },
    };
};

export default connect(null, mapDispatchToProps)(Button);