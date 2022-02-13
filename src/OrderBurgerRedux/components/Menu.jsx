import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';

class Menu extends Component {
    renderMenu = () => {
        const { menu } = this.props;
        return Object.entries(menu).map(([item, unitPrice], index) => {
            return (
                <Row key={index} item={item} unitPrice={unitPrice} />
            );
        });
    };

    render() {
        return (
            <>
                <h3 className='text-primary mb-3'>Chọn thức ăn</h3>
                <table className='table align-middle'>
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderMenu()}</tbody>
                    <tfoot>
                        <tr className='fw-bold'>
                            <td colSpan='3'>Total</td>
                            <td>{this.props.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.OrderBurgerReducer.menu,
        total: state.OrderBurgerReducer.total,
    };
};

export default connect(mapStateToProps, null)(Menu);