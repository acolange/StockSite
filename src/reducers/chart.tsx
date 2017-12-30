import { ChartAction } from '../actions/chart';
import { ChartState } from '../types/chart';
import { ADD_STOCK, REMOVE_STOCK } from '../constants/chart';

export function chart(state: ChartState, action: ChartAction): ChartState {
    switch (action.type) {
        case ADD_STOCK:
            return {...state, stocks: state.stocks.concat(action.stock)};
        case REMOVE_STOCK:
            let ind = state.stocks.indexOf(action.stock);
            return {...state, stocks: state.stocks.slice(0, ind).concat(state.stocks.slice(ind + 1))};
        default:
            return state;
    }
}