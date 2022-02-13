import { CHANGE_AMOUNT } from '../constants/OrderBurgerConstant';

const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: { salad: 10, cheese: 20, beef: 55 },
    total: 85,
};

const OrderBurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case CHANGE_AMOUNT:
            const { item, amount } = action;
            const { burger, menu } = state;
            let { total } = state;

            // amount
            if (amount === -1 && state.burger[item] < 1) {
                return { ...state };
            } else {
                burger[item] += amount;
            }
            state.burger = { ...burger };

            // total
            total += amount * menu[item];
            state.total = total;

            return { ...state };
        default:
            return { ...state };
    }
};

export default OrderBurgerReducer;