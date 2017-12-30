import * as constants from '../constants/chart';

export interface AddStock {
    type: constants.ADD_STOCK;
    stock: string;
}

export interface RemoveStock {
    type: constants.REMOVE_STOCK;
    stock: string;
}

export type ChartAction = AddStock | RemoveStock;

export const addStock = (stock: string): AddStock => {
    return {
        type: constants.ADD_STOCK,
        stock: stock ? stock : ''
    };
};

export const removeStock = (stock: string): RemoveStock => {
    return {
        type: constants.REMOVE_STOCK,
        stock: stock ? stock : ''
    };
};