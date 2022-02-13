import React, { Component } from 'react';
import Burger from './components/Burger';
import Menu from './components/Menu';
import './style/OrderBurgerRedux.css';

class OrderBurgerRedux extends Component {
    render() {
        return (
            <div className='container mt-3 text-center'>
                <h2 className='display-4 text-success fw-bold'>
                    Bài tập Burger Cybersoft
                </h2>
                <div className='row mt-5'>
                    <div className='col-7'><Burger /></div>
                    <div className='col-5'><Menu /></div>
                </div>
            </div>
        );
    }
}

export default OrderBurgerRedux;