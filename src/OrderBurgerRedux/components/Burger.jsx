import React, { Component } from 'react';
import { connect } from 'react-redux';

class Burger extends Component {
    renderBurger = () => {
        const { burger } = this.props;

        return Object.entries(burger).map(([item, amount]) => {
            const items = [];
            for (let i = 0; i < amount; i++) {
                items.push(<div key={i} className={item}></div>);
            }
            return items;
        });
    };

    render() {
        return (
            <>
                <h3 className='text-danger mb-3'>Bánh Burger của bạn</h3>
                <div className='breadTop'></div>
                {this.renderBurger()}
                <div className='breadBottom'></div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.OrderBurgerReducer.burger,
    };
};

export default connect(mapStateToProps, null)(Burger);