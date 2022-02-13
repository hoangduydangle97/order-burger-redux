import { CHANGE_AMOUNT } from '../constants/OrderBurgerConstant';

export const changeAmountAction = (item, amount) => {
    return {
        type: CHANGE_AMOUNT,
        item,
        amount,
    };
};