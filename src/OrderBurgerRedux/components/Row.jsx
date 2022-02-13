import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';

class Row extends Component {
    render() {
        const { item, unitPrice, burger } = this.props;

        return (
            <tr>
                <td>{item}</td>
                <td>
                    <Button item={item} className='btn-success me-3' content='+' amount={1} />
                    {burger[item]}
                    <Button item={item} className='btn-danger ms-3' content='-' amount={-1} />
                </td>
                <td>{unitPrice}</td>
                <td>{burger[item] * unitPrice}</td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.OrderBurgerReducer.burger,
    };
};

export default connect(mapStateToProps, null)(Row);